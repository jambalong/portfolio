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
              I’m a Software Engineer and Computer Science student focused on building 
              reliable web applications. I began my studies 
              at Washington State University, transitioned to the workforce to gain 
              practical experience, and am now completing my degree at Walla Walla Community College.
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              I balance my academic growth with hands-on technical work:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">Full-Stack Engineering:</span> Developing <strong>Pangu Terminal</strong>, a Rails 8 + Hotwire platform for real-time game data optimization.
              </li>
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">IT Operations:</span> Serving as an <strong>IT Intern</strong>, managing infrastructure, security protocols, and hardware systems.
              </li>
              <li className="custom-bullet text-text-secondary">
                <span className="text-tertiary font-medium">Independent Research:</span> Building logic-heavy projects, like <strong>Ruby chess engines</strong> and <strong>React apps</strong>, to master clean architecture.
              </li>
            </ul>
            
            <blockquote className="pull-quote text-lg italic">
              "I approach every challenge with a researcher’s mindset: if I don't 
              know the answer, I lean on documentation and persistent testing 
              until I find the solution that lasts."
            </blockquote>
            
            <p className="text-text-secondary leading-relaxed mt-8">
              When I’m not at my desk, I’m usually writing technical blogs, exploring 
              new frameworks, or being reminded by my cats that every bug is just 
              a puzzle waiting to be solved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
