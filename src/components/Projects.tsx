import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import chessScreenshot from "@/assets/chess-engine-screenshot.png";
import efiScriptScreenshot from "@/assets/efi-script-screenshot.png";

const projects = [
  {
    title: "EFI BootMgr Cert Check",
    category: "Security / PowerShell",
    details:
      "PowerShell audit script deployed via ManageEngine across several departments to validate boot manager binaries for Windows UEFI CA 2023 signing compliance. Identified that Get-AuthenticodeSignature and Get-PfxCertificate both return incorrect issuer data for EFI binaries and resolved it by switching to X509Certificate.CreateFromSignedFile.",
    tech: ["PowerShell", "UEFI", "Secure Boot"],
    image: efiScriptScreenshot,
    codeUrl: "https://github.com/jambalong/efi-bootmgr-cert-check",
    accent: "green",
  },
  {
    title: "Ruby CLI Chess",
    category: "CLI / Game Logic",
    details:
      "Terminal chess engine in pure Ruby with no framework. Validates legal moves for all pieces via directional constraints and collision detection, and confirms check and checkmate by deep-cloning board state to simulate each candidate move.",
    tech: ["Ruby", "OOP"],
    image: chessScreenshot,
    codeUrl: "https://github.com/jambalong/chess",
    accent: "red",
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
          <p className="dt-eyebrow mb-3" style={{ opacity: 0.8 }}>
            Other Work
          </p>
          <h2 className="dt-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Additional <em>Projects</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ title, category, details, tech, image, codeUrl, liveUrl, accent }, index) => {
            const accentCard = `dt-card-${accent}`;
            const accentEyebrow = `dt-eyebrow-${accent}`;
            const accentColor = `var(--dt-${accent})`;

            return (
              <motion.article
                key={title}
                className={`dt-card ${accentCard} overflow-hidden flex flex-col`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: "var(--dt-bg)" }}>
                  <img
                    src={typeof image === "string" ? image : (image as any).src}
                    alt={`${title} screenshot`}
                    className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.03]"
                    style={{ filter: "brightness(0.85)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p className={`${accentEyebrow} mb-2.5`} style={{ fontSize: "9px", opacity: 0.75 }}>
                    {category}
                  </p>

                  <h3 className="dt-display mb-1.5" style={{ fontSize: "20px" }}>
                    {title}
                  </h3>

                  <p className="dt-body mb-4 flex-1" style={{ fontSize: "13px" }}>
                    {details}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tech.map((t) => (
                      <span key={t} className="dt-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2.5">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dt-btn-primary"
                        style={{
                          padding: "7px 14px",
                          fontSize: "10px",
                          borderColor: accentColor,
                          color: accentColor,
                          background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                        }}
                      >
                        <ExternalLink size={12} /> Demo
                      </a>
                    )}
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dt-btn-ghost"
                      style={{ padding: "7px 14px", fontSize: "10px" }}
                    >
                      <Github size={12} /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
