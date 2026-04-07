import { motion } from "framer-motion";
import { Code2, Layout, Server, Lightbulb } from "lucide-react";

const skillCategories = [
    {
        title: "Backend",
        icon: Code2,
        skills: [
            "Ruby on Rails",
            "Hotwire (Turbo / Stimulus)",
            "PostgreSQL",
            "ActiveRecord",
            "RESTful APIs",
            "Service Objects",
            "MVC",
            "OOP",
        ],
        accentCard: "dt-card-accent",
        accentEyebrow: "dt-eyebrow",
        accentColor: "var(--dt-accent)",
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: ["JavaScript", "HTML5", "CSS3", "Stimulus.js", "Rails Views (ERB)"],
        accentCard: "dt-card-green",
        accentEyebrow: "dt-eyebrow-green",
        accentColor: "var(--dt-green)",
    },
    {
        title: "DevOps",
        icon: Server,
        skills: ["Docker", "Linux", "DigitalOcean", "Kamal 2", "Git", "PowerShell"],
        accentCard: "dt-card-orange",
        accentEyebrow: "dt-eyebrow-orange",
        accentColor: "var(--dt-orange)",
    },
    {
        title: "Practices",
        icon: Lightbulb,
        skills: ["Minitest", "TDD", "N+1 Prevention", "Service-layer Architecture"],
        accentCard: "dt-card-red",
        accentEyebrow: "dt-eyebrow-red",
        accentColor: "var(--dt-red)",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="dt-surface py-24">
            <div className="w-full max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="mb-14"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={`dt-card dt-card-on-surface ${category.accentCard} p-6`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="flex items-center justify-center w-8 h-8"
                                    style={{
                                        border: `1px solid ${category.accentColor}44`,
                                        background: `${category.accentColor}0d`,
                                    }}
                                >
                                    <category.icon size={16} style={{ color: category.accentColor }} />
                                </div>
                                <h3 className={category.accentEyebrow} style={{ fontSize: "11px" }}>
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skill} className="dt-body" style={{ fontSize: "13px" }}>
                                        {skill}
                                        {skillIndex < category.skills.length - 1 && (
                                            <span
                                                style={{ color: category.accentColor, opacity: 0.4, margin: "0 8px" }}
                                            >
                                                ·
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
