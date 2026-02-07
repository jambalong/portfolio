import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import chessScreenshot from '@/assets/chess-engine-screenshot.png';
import pebbleScreenshot from '@/assets/pebble-list-screenshot.png';

const projects = [
  {
    title: 'Ruby Chess Engine',
    description: 'CLI chess with move validation and checkmate detection',
    details: 'Terminal chess game demonstrating object-oriented design. Implements move validation, collision detection, and checkmate logic with modular class architecture.',
    tech: ['Ruby', 'RSpec', 'OOP'],
    image: chessScreenshot,
    liveUrl: 'https://replit.com/@jambalong/chess',
    codeUrl: 'https://github.com/jambalong/chess',
  },
  {
    title: 'Pebble List',
    description: 'Task management app with React hooks',
    details: 'Task management application built with React demonstrating component-based architecture and state management patterns.',
    tech: ['React', 'JavaScript', 'Vite'],
    image: pebbleScreenshot,
    liveUrl: 'https://jambalong.github.io/pebble-list/',
    codeUrl: 'https://github.com/jambalong/pebble-list',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Other Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of personal projects that showcase different skills and technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-lift bg-popover rounded-xl overflow-hidden border border-border group"
            >
              {/* Screenshot */}
              <div className="relative aspect-video bg-card overflow-hidden">
                <img 
                  src={typeof project.image === 'string' ? project.image : project.image.src} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary font-medium mb-3">
                  {project.description}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.details}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">{tech}</span>
                  ))}
                </div>
                
                {/* CTAs */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary py-2 px-4 text-sm"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
