---
title: "Keeping an LLM Call from Breaking a Page"
seoTitle: "Calling an LLM from Rails Without Blocking or Breaking the Page"
description: "What I changed after adding an LLM feature to Pangu Terminal so that a slow or failed API call can't take the page down with it."
date: "2026-05-08"
tags: ["Ruby on Rails", "Hotwire", "LLM"]
---

In May I added a farming advisor to Pangu Terminal. The optimizer page already worked out what you are missing and ranked where to farm it. The advisor sends those numbers to a language model through the RubyLLM gem and prints a few sentences of advice. Most of the work was making sure the page survives when the API is slow or fails.

## Give the Model Numbers

I didn't want the model doing crafting math. It would sound sure of itself whether the answer was right or not. [The synthesis service](/blog/teaching-an-inventory-to-craft/) only looked one tier down, so I added a `chain_coverage` method that walks a whole material family from the bottom:

```ruby
# Walk bottom-up: pool represents units available at each tier
pool = 0
chain.reverse_each do |mat|
  owned = @owned[mat.id] || 0
  needed = @required[mat.id] || 0
  surplus = [ owned - needed, 0 ].max
  pool = (pool + surplus) / 3
end

pool == 0 ? nil : [ pool, deficit ].min
```

One of the tests: you need 2 of a rarity-5 item, and you own 9 of the rarity-3 and 3 of the rarity-4. The 9 become 3, those join the 3 you have, and the 6 become 2. The prompt gets that result as a finished statement, and it tells the model to use only the numbers provided.

## The First Version Blocked the Page

My first wiring called the advisor inside the optimizer's `index` action. Every load of the page waited for the API before it rendered anything. A page that waits on someone else's API is only as fast as that API.

I moved the call to its own `advise` action. The page loads it through a Turbo Frame with a `src`:

```erb
<%= turbo_frame_tag "farming-advisor", src: optimizer_advise_path do %>
  <div class="optimizer-advisor">
    <h2 class="optimizer-results-title">&gt; FARMING_ADVISOR</h2>
    <div class="optimizer-advisor-card optimizer-advisor-card--loading">
      <span class="optimizer-advisor-dot"></span>
      <span class="optimizer-advisor-dot"></span>
      <span class="optimizer-advisor-dot"></span>
    </div>
  </div>
<% end %>
```

The optimizer results render straight away, with pulsing dots where the advice will go. The frame makes a second request to `advise`, and the response replaces the dots.

## Rescuing Two Errors Was Not Enough

All calls to the gem go through one small class. On the day I wrote it, I added a rescue for rate limit and context length errors that returns a fallback sentence. Four days later I found that any other error left the advisor frame blank, so I added a rescue for everything else and logged it. The day after that I added a 20 second timeout for slow or dropped connections. This is the class now:

```ruby
require "timeout"

class LlmClient
  def self.ask(prompt)
    Timeout.timeout(20) do
      chat = RubyLLM.chat
      chat.ask(prompt).content
    end
  rescue Timeout::Error
    "Advisor is temporarily unavailable. Check your farming priority ranking above for recommendations."
  rescue RubyLLM::RateLimitError, RubyLLM::ContextLengthExceededError
    "Advisor is temporarily unavailable. Check your farming priority ranking above for recommendations."
  rescue => e
    Rails.logger.error("LlmClient error: #{e.class} #{e.message}")
    "Advisor is temporarily unavailable. Check your farming priority ranking above for recommendations."
  end
end
```

The same sentence appears three times, which isn't pretty. But every path returns a string, so the frame always has something to show. The fallback points back at the priority ranking, which doesn't depend on the model.

## A Bang in the Initializer

The first version of the RubyLLM initializer read the API key with `credentials.gemini_api_key!`. The bang version raises when the key is missing. The Dockerfile precompiles assets without the Rails master key, so credentials can't be read at that step. I dropped the bang:

```ruby
config.gemini_api_key = Rails.application.credentials.gemini_api_key
```

## Tests Should Not Call the API

The test suite replaces the client's one method in `test_helper.rb`:

```ruby
# Prevent real LLM API calls in tests
LlmClient.instance_eval do
  def ask(prompt)
    "Stub farming advice."
  end
end
```

It sits near the top of the helper, before the parallel test workers fork, so every worker gets the stub. `FarmingAdvisorService` only ever calls `LlmClient.ask`, so this one stub is enough.

## Choosing a Model by Its Limits

The model name lives in the initializer, not in the client. `LlmClient` calls `RubyLLM.chat` with no arguments and gets the default. I started on `gemini-2.5-flash` and switched the same day to `gemini-3.1-flash-lite-preview`. My changelog gives the reason: headroom on a free tier of 500 requests per day. The switch was a one-line change.
