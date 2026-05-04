import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-gold/10 bg-gradient-to-b from-[#040208] to-black py-20 px-6">
    <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-30" aria-hidden />
    <div className="absolute left-1/2 top-0 h-px w-2/3 max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

    <div className="container relative mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <BrandLogo variant="footer" className="mb-10" />
        <p className="mb-10 font-elegant text-sm italic tracking-[0.2em] text-white/40">The crown of Kasoa nightlife</p>
        
        <div className="mb-12 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Contact" ? "mailto:issakafelix57@gmail.com" : "#"}
              className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/35 transition-colors hover:text-champagne"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/25">
          © {new Date().getFullYear()} McSteeze Lounge &amp; Pub · Crafted by{" "}
          <a
            href="https://kaddev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/50 transition-colors hover:text-gold"
          >
            kaddev.vercel.app
          </a>
        </p>
      </motion.div>
    </div>
    
    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[900px] max-w-[140%] translate-y-1/2 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[130px]" />
  </footer>
);

export default Footer;
