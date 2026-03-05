import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import chessScreenshot from '@/assets/chess-engine-screenshot.png';
import pebbleScreenshot from '@/assets/pebble-list-screenshot.png';

const projects = [
  {
    title: 'Ruby Chess Engine',
    category: 'CLI / Game Logic',
    details:
      'Terminal chess game demonstrating object-oriented design. Implements move validation, collision detection, and checkmate logic with modular class architecture.',
    tech: ['Ruby', 'OOP'],
    image: chessScreenshot,
    liveUrl: 'https://replit.com/@jambalong/chess',
    codeUrl: 'https://github.com/jambalong/chess',
    accentClass: 'dt-card-red',
    eyebrowClass: 'dt-eyebrow-red',
    btnAccent: 'var(--dt-red)',
  },
  {
    title: 'Pebble List',
    category: 'Frontend / React',
    details:
      'Task management application built with React demonstrating component-based architecture and state management patterns.',
    tech: ['React', 'JavaScript', 'Vite'],
    image: pebbleScreenshot,
    liveUrl: 'https://jambalong.github.io/pebble-list/',
    codeUrl: 'https://github.com/jambalong/pebble-list',
    accentClass: 'dt-card-green',
    eyebrowClass: 'dt-eyebrow-green',
    btnAccent: 'var(--dt-green)',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="dt-bg py-24">
      <div className="w-full max-w-4xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="dt-eyebrow-green mb-3" style={{ opacity: 0.8 }}>Other Work</p>
          <h2 className="dt-display mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Additional <em style={{ color: 'var(--dt-green)' }}>Projects</em>
          </h2>
          <p className="dt-body max-w-md" style={{ fontSize: '14px' }}>
            A selection of personal projects showcasing different skills and technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`dt-card ${project.accentClass} overflow-hidden`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: 'var(--dt-bg)' }}>
                <img
                  src={typeof project.image === 'string' ? project.image : (project.image as any).src}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.03]"
                  style={{ filter: 'brightness(0.85)' }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`${project.eyebrowClass} mb-2.5`} style={{ fontSize: '9px', opacity: 0.75 }}>
                  {project.category}
                </p>

                <h3 className="dt-display mb-1.5" style={{ fontSize: '20px' }}>
                  {project.title}
                </h3>

                <p className="dt-body mb-4" style={{ fontSize: '13px' }}>
                  {project.details}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="dt-tag">{tech}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dt-btn-primary"
                      style={{
                        padding: '7px 14px',
                        fontSize: '10px',
                        borderColor: project.btnAccent,
                        color: project.btnAccent,
                        background: `color-mix(in srgb, ${project.btnAccent} 10%, transparent)`,
                      }}
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-btn-ghost"
                    style={{ padding: '7px 14px', fontSize: '10px' }}
                  >
                    <Github size={12} /> Code
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