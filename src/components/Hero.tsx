import { motion } from "framer-motion";
import hero from "@/assets/hero-lounge.jpg";
import BrandLogo from "@/components/BrandLogo";

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030208]">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 28, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="McSteeze lounge interior"
          className="h-full w-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06040f]/80 via-[#030208]/50 to-[#030208]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030208] via-transparent to-[#030208] opacity-75" />
        <div className="vignette-hero pointer-events-none absolute inset-0" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -left-[20%] top-[10%] h-[55vh] w-[55vh] rounded-full bg-gold/15 blur-[140px]" />
        <div className="animate-aurora absolute -right-[15%] bottom-[5%] h-[50vh] w-[50vh] rounded-full bg-velvet/40 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-25" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-24 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <BrandLogo variant="hero" markOnly className="justify-center" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="section-kicker mb-8"
        >
          <span>The ultimate lounge experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-[0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">Crafted for</span>
          <span className="mt-2 block bg-gradient-to-br from-[#f0e6c8] via-[#d4af37] to-[#8a7020] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.25)]">
            royalty
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="font-elegant mx-auto mt-8 max-w-2xl text-lg italic leading-relaxed text-white/55 sm:text-xl md:text-2xl"
        >
          Indulge where velvet nights, rare spirits, and golden hospitality meet — the crown of Kasoa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8"
        >
          <a href="#reserve" className="button-premium px-12 py-5 text-base tracking-[0.22em]">
            Book a table
          </a>
          <a
            href="#menu"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-white/55 transition-premium hover:text-champagne"
          >
            Explore menu
            <span className="h-px w-10 bg-white/25 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.5em] text-white/35">Scroll</span>
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-gold/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
