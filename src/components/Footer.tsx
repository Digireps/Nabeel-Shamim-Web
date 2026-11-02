import { motion } from "framer-motion";
import { Linkedin, Globe, Award, ArrowUpRight } from "lucide-react"; // Removed Mail import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background pt-24 overflow-hidden">
      {/* Subtle Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="text-3xl font-black font-['Helvetica'] tracking-tighter text-foreground group">
              MNS<span className="text-primary group-hover:animate-pulse">.</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-medium">
              Building global businesses, connecting world-class talent with ambitious companies through strategic asynchronous execution.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border shadow-sm text-[10px] font-bold uppercase tracking-widest text-black">
              <Award size={14} className="text-primary" />
              FORBES RECOGNIZED ENTREPRENEUR
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-dm font-black text-[12px] uppercase tracking-[0.6em] mb-8 text-primary/70">Navigation</h4>
            <nav aria-label="Site navigation" className="flex flex-col gap-4">
              {["About", "Ventures", "Awards", "Roles", "Press"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group font-semibold"
                >
                  <span className="h-px w-0 bg-primary group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Presence */}
          <div className="md:col-span-4">
            <h4 className="font-dm font-black text-[12px] uppercase tracking-[0.6em] mb-8 text-primary/70">Global Connect</h4>
            <div className="flex items-center gap-4 mb-8">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/mnabeelshamim/", label: "LinkedIn" },
                { icon: Globe, url: "https://digireps.co", label: "DigiReps®" },
                // Email object removed from this list
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  whileHover={{ y: -5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <a
              href="https://digireps.co/aboutus"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all"
            >
              Visit DigiReps® <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Bottom Bar */}
      <div className="border-t border-border/50 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            © {currentYear} Nabeel Shamim. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Consultations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;