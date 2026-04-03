import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import panguScreenshot from "@/assets/pangu-terminal-screenshot.png";

const techStack = [
  "Ruby on Rails 8.1",
  "Hotwire",
  "PostgreSQL",
  "Docker",
  "Kamal 2",
];

const features = [
  "Game upgrade paths pull from 10+ overlapping cost tables with no single source of truth, so I built a service layer that queries each table in isolation and keeps the planning logic independently testable",
  "The REST API returns a material deficit and its farming source from a single endpoint pair, so clients have everything needed to render a farming view without a second request",
  "Inventory edits trigger real-time re-renders of entire synthesis families via Hotwire Turbo Streams; plan output is JSONB-cached so the page reads from cache rather than recomputing on load",
  "Achieved 96%+ service layer test coverage across three planning services, surfacing cost calculation edge cases that weren't caught during manual testing",
  "Surplus lower-tier materials can be synthesized 3-to-1 into higher tiers, and the planner reconciles cross-rarity EXP equivalence before marking a plan complete",
];

const FeaturedProject = () => {
  return (
    <section id="featured" className="dt-surface py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section eyebrow + rule */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="dt-eyebrow mb-3">Currently Building</p>
          <div className="dt-rule" />
        </motion.div>

        {/* Title + subtitle above grid */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <h2
            className="dt-display mb-2"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Pangu <em>Terminal</em>
          </h2>
          <p className="dt-eyebrow-muted">
            Resource-optimization platform for Wuthering Waves
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Browser mockup */}
          <motion.div
            className="dt-browser"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="dt-browser-bar">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "var(--dt-red)" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "var(--dt-orange)" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "var(--dt-green)" }}
              />
              <span className="dt-mono ml-3">panguterminal.ambalong.dev</span>
            </div>
            <img
              src={
                typeof panguScreenshot === "string"
                  ? panguScreenshot
                  : (panguScreenshot as any).src
              }
              alt="Pangu Terminal dashboard showing resource optimization interface"
              className="w-full h-auto block"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Feature list */}
            <ul
              className="mb-7 flex flex-col gap-2.5"
              style={{ listStyle: "none", padding: 0 }}
            >
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  className="dt-body relative pl-5"
                  style={{ fontSize: "13px" }}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span
                    className="absolute left-0"
                    style={{ color: "var(--dt-accent)", opacity: 0.6 }}
                  >
                    –
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span key={tech} className="dt-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://panguterminal.ambalong.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="dt-btn-primary"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href="https://github.com/jambalong/pangu-terminal"
                target="_blank"
                rel="noopener noreferrer"
                className="dt-btn-ghost"
              >
                <Github size={14} /> View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
