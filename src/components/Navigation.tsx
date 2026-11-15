import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  pathname?: string;
}

const navLinks = [
  { label: 'Writing', href: '/blog/', match: (p: string) => p.startsWith('/blog') },
  { label: 'Projects', href: '/#projects', match: (p: string) => p.startsWith('/projects') },
  { label: 'About', href: '/about/', match: (p: string) => p.startsWith('/about') },
];

const Navigation = ({ pathname = '' }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: isScrolled || isMobileMenuOpen ? 'rgba(10,10,15,0.92)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--dt-border)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main">
        {/* Logo */}
        <a
          href="/"
          className="nav-logo"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            fontWeight: 400,
            textDecoration: 'none',
          }}
        >
          Ambalong
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="dt-mono nav-link"
              aria-current={link.match(pathname) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="/#subscribe" className="dt-btn-green ml-3" style={{ padding: '6px 14px', minHeight: '40px' }}>
            Subscribe
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="nav-mobile-btn dt-icon-link"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="nav-mobile-panel"
          style={{
            background: 'rgba(10,10,15,0.95)',
            borderTop: '1px solid var(--dt-border)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="w-full max-w-4xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="dt-mono nav-link-mobile"
                aria-current={link.match(pathname) ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#subscribe"
              className="dt-btn-green mt-4"
              style={{ textAlign: 'center', justifyContent: 'center' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
