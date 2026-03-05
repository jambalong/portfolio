import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="dt-bg py-10"
      style={{ borderTop: '1px solid var(--dt-border)' }}
    >
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left — copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="dt-mono">
              John Alvin Ambalong © {currentYear}
            </span>
            <span className="dt-mono hidden sm:inline" style={{ color: 'var(--dt-border)' }}>·</span>
            <span className="dt-mono">
              Built with{' '}
              <a
                href="https://astro.build"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--dt-accent)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
              >
                Astro
              </a>
              {' '}+ React
            </span>
          </div>

          {/* Right — socials */}
          <div className="flex items-center gap-2">
            {[
              { href: 'https://github.com/jambalong',          label: 'GitHub',   icon: <Github   size={16} /> },
              { href: 'https://www.linkedin.com/in/jambalong', label: 'LinkedIn', icon: <Linkedin size={16} /> },
              { href: 'mailto:johnalvin@ambalong.dev',         label: 'Email',    icon: <Mail     size={16} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="dt-icon-link"
                style={{ width: '32px', height: '32px' }}
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;