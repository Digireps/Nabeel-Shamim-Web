import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#introduction" },
  { label: "Ventures", href: "#investments" },
  { label: "Awards", href: "#awards" },
  { label: "Press", href: "#press" },
  { label: "Books", href: "#publications" },
  { label: "ASSOCIATIONS", href: "#board-seats" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust background visibility
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-8 pointer-events-none">
      <motion.nav
        className={`
          pointer-events-auto flex items-center justify-center 
          px-6 md:px-8 py-3 rounded-full transition-all duration-700
          ${scrolled 
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" 
            : "bg-transparent border-transparent"
          }
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Centered Navigation Links - Desktop Only */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-all duration-500 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle - Improved visibility and touch target */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/5 md:hover:bg-zinc-100 dark:md:hover:bg-white/10 transition-colors pointer-events-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-zinc-500" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay - Clean & Fixed UI */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[110] bg-white/98 dark:bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button inside overlay for mobile */}
            <button 
              className="absolute top-10 right-10 p-2"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} className="text-primary" />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;