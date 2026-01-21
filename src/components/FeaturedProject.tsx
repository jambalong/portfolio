import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import panguScreenshot from '@/assets/pangu-terminal-screenshot.png';

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-20 bg-popover">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-tertiary text-tertiary-foreground mb-8">
            Currently Building
          </span>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="browser-mockup card-lift"
            >
              <div className="browser-mockup-bar">
                <div className="browser-dot bg-destructive" />
                <div className="browser-dot bg-warning" />
                <div className="browser-dot bg-success" />
                <span className="ml-4 text-sm text-text-muted">panguterminal.ambalong.dev</span>
              </div>
              <img 
                src={typeof panguScreenshot === 'string' ? panguScreenshot : panguScreenshot.src} 
                alt="Pangu Terminal dashboard showing resource optimization interface"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-lift rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Pangu Terminal
              </h2>
              <p className="text-lg text-text-secondary mb-4">
                Resource-optimization platform for Wuthering Waves
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Production-deployed Rails app for resource planning and inventory tracking:
              </p>

              {/* Feature List */}
              <ul className="text-foreground leading-relaxed mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Recursive calculation engine for multi-level crafting dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Server-side search filtering for better performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Guest-to-user data migration for seamless account creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hotwire for SPA-like interactions without JavaScript frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Docker + Kamal deployment for portable architecture</span>
                </li>
              </ul>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Ruby on Rails 8', 'Hotwire', 'PostgreSQL', 'Docker', 'Kamal 2'].map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="https://panguterminal.ambalong.dev" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a href="https://github.com/jambalong/pangu-terminal" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Github size={18} />
                  View Code
                </a>
                {/* <a href="#" className="btn-ghost text-secondary">
                  Read Case Study
                  <ArrowRight size={18} />
                </a> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
