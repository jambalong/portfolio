import { motion } from 'framer-motion';
import { Code2, Layout, Server, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Stack',
    icon: Code2,
    skills: ['Ruby on Rails', 'Hotwire', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Server,
    skills: ['Linux', 'Git/GitHub', 'CI/CD', 'DigitalOcean', 'Kamal'],
  },
  {
    title: 'Foundations',
    icon: Lightbulb,
    skills: ['System Design', 'Database Design', 'API Design', 'Version Control'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and concepts I work with to build production-ready applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-lift bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-x-2 text-text-secondary">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skill} className="hover:text-primary transition-colors cursor-default">
                    {skill}
                    {skillIndex < category.skills.length - 1 && (
                      <span className="text-primary mx-1">·</span>
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
