import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="dt-bg py-24">
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="dt-eyebrow mb-3">About</p>

          {/* Heading */}
          <h2 className="dt-display mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            The person <em>behind the work</em>
          </h2>

          {/* Divider */}
          <div className="dt-rule mb-8" />

          {/* Copy */}
          <div className="flex flex-col gap-5 mb-10">
            <p className="dt-body" style={{ fontSize: "14px" }}>
              I studied software design at community college and finished in 2026. Most of what I know came from
              building things on my own, outside of class.
            </p>

            <p className="dt-body" style={{ fontSize: "14px" }}>
              Pangu Terminal is the biggest of those. It was my capstone project.
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid var(--dt-border)" }}>
            {[
              { label: "Location", value: "Washington State" },
              { label: "Blog", value: "ambalong.dev/blog", href: "https://ambalong.dev/blog" },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex gap-6">
                <span className="dt-eyebrow-muted" style={{ minWidth: "72px" }}>
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-mono"
                    style={{ color: "var(--dt-accent)", textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="dt-mono" style={{ color: "var(--dt-text)" }}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
