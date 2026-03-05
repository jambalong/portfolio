import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Projects', href: '/#featured' },
  { label: 'Skills',   href: '/#skills' },
  { label: 'About',    href: '/#about' },
  { label: 'Blog',     href: '/blog' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--dt-border)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--dt-text)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-accent)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-text)'; }}
        >
          Ambalong
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="dt-mono"
              style={{
                padding: '6px 14px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '10px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-text)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-muted)'; }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dt-btn-ghost ml-3"
            style={{ padding: '6px 14px', fontSize: '10px' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden dt-icon-link"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10,10,15,0.95)',
              borderTop: '1px solid var(--dt-border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="w-full max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="dt-mono"
                  style={{
                    padding: '10px 0',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontSize: '11px',
                    borderBottom: '1px solid var(--dt-border)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-text)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dt-muted)'; }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="dt-btn-ghost mt-4"
                style={{ fontSize: '11px', textAlign: 'center' }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;