import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import { X, Menu as MenuIcon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Vibe", href: "#gallery" },
  { label: "Reserve", href: "#reserve" },
  { label: "Find Us", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            className={`relative flex items-center justify-between overflow-hidden rounded-full border px-5 py-3 sm:px-7 sm:py-3.5 transition-all duration-700 ${
              scrolled
                ? "border-gold/20 glass-dark shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)]"
                : "border-white/[0.07] bg-black/25 backdrop-blur-md"
            }`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(105deg, transparent 0%, hsl(42 78% 55% / 0.06) 45%, transparent 70%)",
              }}
            />
            <a
              href="#hero"
              className="relative z-10 flex min-w-0 items-center"
              onClick={closeMenu}
              aria-label="McSteeze Lounge — back to top"
            >
              <BrandLogo variant="navbar" />
            </a>

            <ul className="relative z-10 hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <motion.li key={l.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                  <a
                    href={l.href}
                    className="group relative text-sm font-semibold uppercase tracking-[0.18em] text-foreground/65 transition-premium hover:text-champagne"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold to-amber-200 transition-all duration-500 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                <a href="#reserve" className="button-premium inline-block text-sm tracking-[0.2em] py-2.5 px-7">
                  Book now
                </a>
              </motion.li>
            </ul>

            <button
              type="button"
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/85 transition-premium hover:border-gold/35 hover:text-gold md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[radial-gradient(ellipse_at_top,_hsl(260_30%_8%_/_0.97),_hsl(260_25%_3%_/_0.99))] backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="flex h-full flex-col items-center justify-center px-8"
            >
              <ul className="flex flex-col items-center gap-10">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <a
                      href={l.href}
                      onClick={closeMenu}
                      className="font-display text-4xl font-bold uppercase tracking-[0.18em] text-white/55 transition-premium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gold hover:via-amber-100 hover:to-gold"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="ornament-line mt-14" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 font-elegant text-[0.65rem] uppercase tracking-[0.85em] text-gold/50"
              >
                Kasoa nightlife
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
