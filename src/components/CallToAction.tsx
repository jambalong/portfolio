import { Mail, FileText, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-linear-to-b from-background to-popover">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            I'm actively seeking Software Engineer opportunities in Washington State or 
            remote positions where I can contribute to building quality software.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:johnalvin@ambalong.dev" 
              className="btn-primary w-full sm:w-auto"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <FileText size={20} />
              Download Resume
            </a>
            <a 
              href="https://linkedin.com/jambalong" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Linkedin size={20} />
              View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
