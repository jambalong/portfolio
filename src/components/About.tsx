import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-elevated rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              About
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Software Engineer building full-stack web applications with Ruby on Rails. Currently
              developing Pangu Terminal, a resource optimization platform for Wuthering Waves that
              handles complex material calculations and inventory reconciliation across 50+ game items.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently completing my AAS in Software Design at Walla Walla Community College 
              (June 2026) while developing production applications and gaining hands-on 
              technical experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
