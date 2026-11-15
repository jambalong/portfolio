---
title: "Hashing API Keys in Rails"
seoTitle: "Storing API Keys as SHA-256 Digests in Rails and Showing the Token Once"
description: "How I moved Pangu Terminal's API keys from plain-text tokens to SHA-256 digests, and the smaller changes that came with it."
date: "2026-03-04"
tags: ["Ruby on Rails", "API", "Security"]
---

Pangu Terminal has a small REST API. Every request carries a bearer token, and the token maps to an API key that belongs to a user. For the first week the API existed, those tokens sat in the database as plain text. This is how I changed that, and what else had to change around it.

## Plain Text for a Week

The first version of the model let Rails generate the token. This is the model as of February 22:

```ruby
has_secure_token :token, length: 36
```

The base controller looked the key up by whatever arrived in the `Authorization` header:

```ruby
api_key = ApiKey.find_by(token: token)
```

That works. It also means the `api_keys` table is a list of working credentials.

## Storing a Digest Instead

On March 1 I replaced `has_secure_token` with a callback that builds the token itself and saves only its SHA-256 digest:

```ruby
def generate_token
  @raw_token = "pt_#{SecureRandom.urlsafe_base64(32)}"
  self.token = Digest::SHA256.hexdigest(@raw_token)
end
```

It runs as a `before_create`. The raw token goes into `@raw_token`, an instance variable with an `attr_reader` and no column behind it. It exists only on the object that was just created.

The `token` column kept its name but now holds something different, so I added a comment to it in a migration:

```ruby
change_column_comment :api_keys, :token, from: nil, to: "SHA-256 digest of the raw token"
```

Authentication hashes whatever comes in and searches for that. This is the check in the API's base controller:

```ruby
def authenticate_api_key!
  authenticate_with_http_token do |token, _options|
    api_key = ApiKey.find_by(token: Digest::SHA256.hexdigest(token))
    api_key&.touch(:last_used_at)
    @current_user = api_key&.user
  end

  handle_unauthorized unless @current_user
end
```

The lookup is still one `find_by` on a uniquely indexed column. SHA-256 gives the same output for the same input, so the digest can be searched for directly.

## Digest, Then Hexdigest

My first commit of that lookup called `Digest::SHA256.digest(token)`. That returns 32 raw bytes, and the column is a string. Eighteen minutes later I switched to `hexdigest`, which returns 64 hex characters. The model and the controller both use `hexdigest`, so what gets written is what gets searched for. The commit log doesn't let me pretend I got it right the first time.

## Showing the Token Once

Since the raw token is never saved, the only moment the app can show it is right after `save`. The controller passes it through the flash:

```ruby
@api_key = current_user.api_keys.build(name: name)
if @api_key.save
  flash[:api_token] = @api_key.raw_token
  flash[:notice] = "API Key \"#{@api_key.name}\" generated successfully."
else
  flash[:alert] = @api_key.errors.full_messages.to_sentence
end
```

The account page renders `flash[:api_token]` in its own box under the line "Copy this token now! It won't be shown again." The shared flash partial skips that key, so the token doesn't also print as an ordinary message. After that page load the app can't produce the token again. If you lose it, you revoke the key and create a new one. That's the cost of never storing it, and I think it's worth paying.

## The Tests Needed the Raw Token Too

My API tests built their header from `@api_key.token`. After the change that value is the digest. Sending it would get it hashed a second time, and the result would match nothing. The tests now keep the raw token from the moment the key is created:

```ruby
@api_key = @user.api_keys.create!(name: "Test Key")
@raw_token = @api_key.raw_token
```

## One Question at the End of the Check

The authentication method above ends with `handle_unauthorized unless @current_user`. It didn't start that way. The first version, from February 22, hung the 401 off the block:

```ruby
authenticate_with_http_token do |token, _options|
  api_key = ApiKey.find_by(token: token)
  @current_user = api_key&.user
end || handle_unauthorized
```

Here the 401 depends on what the block returns. I changed it the same night so the method asks one thing at the end: is there a user or not. A week later the block gained the `touch(:last_used_at)` line, and with this shape it doesn't matter where in the block that line sits.

## Rate Limiting per Key

On March 4 I added Rack::Attack. The API throttle is keyed by token:

```ruby
throttle("api/token", limit: 60, period: 1.minute) do |req|
  if req.path.start_with?("/api")
    req.get_header("HTTP_AUTHORIZATION")&.delete_prefix("Bearer ")
  end
end
```

Each token gets its own bucket of 60 requests a minute. My first version of that block called `req.start_with?("/api")`. `start_with?` is a String method and `req` is a request object, so the limiter crashed. The fix was five characters: `req.path`.

The same day I lowered the number of keys a user can hold from five to three.
