import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 py-18 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 py-4 gradient-text"
          >
            John Alvin Ambalong
          </motion.h1>
          
          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary font-medium mb-8"
          >
            Software Engineer | Ruby on Rails & Full-Stack Development
          </motion.p>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Software Engineer and CS student specializing in Ruby on Rails. Currently developing
            Pangu Terminal, a resource-optimization platform for the Wuthering Waves community,
            while gaining hands-on infrastructure experience as an IT Intern.
          </motion.p>
          
          {/* Status line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-text-muted mb-12"
          >
            <span className="text-tertiary">Engineering Pangu Terminal</span> | 
            <span className="text-tertiary"> IT Intern at WWCC</span> | 
            <span className="text-tertiary"> CS Student</span>
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#featured" className="btn-primary">
              View My Work
              <ArrowDown size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://github.com/jambalong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-primary hover:text-primary/80 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jambalong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-primary hover:text-primary/80 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:johnalvin@ambalong.dev"
                className="p-3 text-primary hover:text-primary/80 hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}     
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a 
            href="#featured" 
            className="text-primary scroll-indicator block"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </motion.div>
    </section>
  );
};

export default Hero;
