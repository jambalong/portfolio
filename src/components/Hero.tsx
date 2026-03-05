import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="dt-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid overlay — hero only */}
      <div className="dt-grid absolute inset-0 z-0" />

      {/* Accent glow — hero only */}
      <div className="dt-glow absolute z-0 w-[600px] h-[300px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">

        {/* Eyebrow */}
        <motion.p
          className="dt-eyebrow mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Software Engineer - AMBALONG.DEV
        </motion.p>

        {/* Name */}
        <motion.h1
          className="dt-display mb-3"
          style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          John Alvin <em>Ambalong</em>
        </motion.h1>

        {/* Role */}
        <motion.p
          className="dt-display mb-7"
          style={{ fontSize: 'clamp(16px, 2.2vw, 24px)', fontStyle: 'italic', color: 'var(--dt-muted)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ruby on Rails : Full-Stack Development
        </motion.p>

        {/* Divider */}
        <motion.div
          className="dt-rule mb-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Description */}
        <motion.p
          className="dt-body mb-10 max-w-lg"
          style={{ fontSize: '14px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Curious by nature, stubborn by habit.<br />
          I build real things, ship them, and show up every day to get better.
        </motion.p>

        {/* Status metadata */}
        <motion.div
          className="flex flex-wrap gap-6 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: 'Status',   value: 'Open to work' },
            { label: 'Location', value: 'Walla Walla, WA' },
            { label: 'Focus',    value: 'Rails / DevOps / Security' },
          ].map(({ label, value }) => (
            <span key={label} className="dt-mono">
              <span className="uppercase tracking-widest">{label} </span>
              <span style={{ color: 'var(--dt-accent)' }}>/ </span>
              <span style={{ color: 'var(--dt-text)' }}>{value}</span>
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#featured" className="dt-btn-primary">
            View Projects <ArrowDown size={14} />
          </a>

          <div className="flex items-center gap-1">
            {[
              { href: 'https://github.com/jambalong',          label: 'GitHub',   icon: <Github   size={18} /> },
              { href: 'https://www.linkedin.com/in/jambalong', label: 'LinkedIn', icon: <Linkedin size={18} /> },
              { href: 'mailto:johnalvin@ambalong.dev',         label: 'Email',    icon: <Mail     size={18} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="dt-icon-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a href="#featured" aria-label="Scroll down" className="dt-icon-link" style={{ border: 'none' }}>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;