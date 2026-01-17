import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <p className="text-text-muted text-sm">
            John Alvin Ambalong © {currentYear}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/jambalong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-secondary hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/jambalong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-secondary hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:johnalvin@ambalong.dev"
              className="text-text-muted hover:text-secondary hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Tech Credit */}
          <p className="text-text-muted text-xs">
            Built with Astro + React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
