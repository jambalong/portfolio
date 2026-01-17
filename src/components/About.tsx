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
              About Me
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a Software Engineer and Computer Science student building production-ready 
              web applications while working hands-on in IT operations.
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              My journey started at Washington State University studying Computer Science and 
              Math, then I transitioned to the workforce to gain real-world experience. Now 
              I'm pursuing my degree at Walla Walla Community College while:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">Engineering Pangu Terminal</span> - a Rails 8 + Hotwire platform serving the gaming community with real-time interactive features
              </li>
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">Working as an IT Intern</span> - managing hardware, security protocols, and technical infrastructure to ensure seamless daily operations
              </li>
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">Building side projects</span> - from chess engines to React applications focusing on performance and clean architecture
              </li>
            </ul>
            
            <blockquote className="pull-quote text-lg">
              I approach every technical challenge with a researcher's mindset: if I don't know 
              the answer, I research and test until I find the solution. This applies whether I'm 
              optimizing database queries, debugging deployment pipelines, or troubleshooting 
              campus workstations.
            </blockquote>
            
            <p className="text-text-secondary leading-relaxed mt-6">
              When I'm not coding, you'll find me exploring new frameworks, writing technical 
              blog posts, or being reminded by my cats to approach every bug with curiosity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
