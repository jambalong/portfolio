import { motion } from "framer-motion";
import { Rocket, Code2, GitBranch, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "Production and Deployment",
    icon: Rocket,
    accent: "accent",
    skills: ["Ruby on Rails 8", "PostgreSQL", "Kamal 2", "Docker", "DigitalOcean", "GitHub Actions"],
  },
  {
    title: "Application Development",
    icon: Code2,
    accent: "green",
    skills: ["Hotwire (Turbo / Stimulus)", "RESTful API design", "ActiveRecord", "RubyLLM", "JavaScript", "ERB"],
  },
  {
    title: "Architecture and Design",
    icon: GitBranch,
    accent: "orange",
    skills: ["Service-layer Architecture", "MVC", "OOP", "API versioning", "Token auth", "Rate limiting"],
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    accent: "red",
    skills: ["TDD", "Minitest", "RSpec", "CI on every PR", "94%+ service-layer coverage"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="dt-surface py-24">
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="dt-eyebrow mb-3">Toolkit</p>
          <h2 className="dt-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Technical <em>Skills</em>
          </h2>
          <p className="dt-body max-w-md" style={{ fontSize: "14px" }}>
            Technologies and concepts I work with to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ title, icon: Icon, accent, skills }, index) => {
            const accentCard = accent === "accent" ? "dt-card-accent" : `dt-card-${accent}`;
            const accentEyebrow = accent === "accent" ? "dt-eyebrow" : `dt-eyebrow-${accent}`;
            const accentColor = accent === "accent" ? "var(--dt-accent)" : `var(--dt-${accent})`;

            return (
              <motion.div
                key={title}
                className={`dt-card dt-card-on-surface ${accentCard} p-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex items-center justify-center w-8 h-8"
                    style={{
                      border: `1px solid ${accentColor}44`,
                      background: `${accentColor}0d`,
                    }}
                  >
                    <Icon size={16} style={{ color: accentColor }} />
                  </div>
                  <h3 className={accentEyebrow} style={{ fontSize: "11px" }}>
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap">
                  {skills.map((skill, skillIndex) => (
                    <span key={skill} className="dt-body" style={{ fontSize: "13px" }}>
                      {skill}
                      {skillIndex < skills.length - 1 && (
                        <span style={{ color: accentColor, opacity: 0.4, margin: "0 8px" }}>·</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
