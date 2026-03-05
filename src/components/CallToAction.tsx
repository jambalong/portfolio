import { Mail, FileText, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="contact" className="dt-surface py-24">
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="dt-eyebrow mb-4">Contact</p>

          {/* Heading */}
          <h2 className="dt-display mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Available for the <em>Right Opportunity</em>
          </h2>

          {/* Divider */}
          <div className="dt-rule mb-8" />

          {/* Body */}
          <p className="dt-body mb-10" style={{ fontSize: '15px', maxWidth: '512px' }}>
            I'm looking for my first engineering role, remote or Washington State.<br />
            If you're building something interesting and value someone who builds and delivers, let's talk.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:johnalvin@ambalong.dev"
              className="dt-btn-primary"
            >
              <Mail size={14} /> Send an Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dt-btn-ghost"
            >
              <FileText size={14} /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jambalong"
              target="_blank"
              rel="noopener noreferrer"
              className="dt-btn-ghost"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;