import { motion } from "framer-motion";
import { Flame, Headphones, Quote, Users } from "lucide-react";
/* Vibe stills — royalty-free via Unsplash License (replace files in src/assets to swap scenes). */
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const items = [
  {
    src: g1,
    alt: "Craft cocktails",
    size: "tall" as const,
    blurb: "Botanicals, ice, and amber light — pours made to slow the world down.",
  },
  {
    src: g2,
    alt: "Sound & session",
    size: "small" as const,
    blurb: "Headphones up, volume honest — the playlist is part of the architecture.",
  },
  {
    src: g3,
    alt: "The toast",
    size: "small" as const,
    blurb: "Glasses meet, laughter rises — the unofficial start of every good story.",
  },
  {
    src: g4,
    alt: "Lounge interior",
    size: "wide" as const,
    blurb: "Leather, brass, and low light — a room built for circles, not corners.",
  },
  {
    src: g5,
    alt: "Back bar",
    size: "medium" as const,
    blurb: "Rows of promise behind glass — pick a bottle, pick a mood, own the night.",
  },
];

const moodTags = [
  "Golden hour",
  "Bottle service",
  "After midnight",
  "Kasoa crown",
  "VIP corners",
  "Smoke & bass",
  "Crystal pours",
  "Crowd control",
  "No rush",
  "Lights low",
  "Your table",
  "The ritual",
];

const pillars = [
  {
    icon: Headphones,
    title: "Sound",
    desc: "DJ sets, curated playlists, and nights that build to a crescendo.",
  },
  {
    icon: Flame,
    title: "Mood",
    desc: "Warm amber, deep velvet darks — every corner feels intentional.",
  },
  {
    icon: Users,
    title: "Energy",
    desc: "The right crowd, the right night. Dress the part, bring the vibe.",
  },
];

const Gallery = () => {
  const marqueeItems = [...moodTags, ...moodTags];

  return (
    <section id="gallery" className="relative overflow-hidden border-t border-white/[0.04] bg-background py-28 sm:py-36">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-velvet/25 blur-[100px]" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-kicker mx-auto mb-6"
          >
            The vibe
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl"
          >
            A glimpse of <span className="font-serif italic text-gradient-gold">pure gold</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-elegant mt-6 text-lg italic leading-relaxed text-white/50 sm:text-xl"
          >
            This is the room where laughter gets louder, playlists get bolder, and the night refuses to end on time.
          </motion.p>
        </div>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] mb-14 w-screen overflow-hidden border-y border-white/[0.06] bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent py-4 sm:mb-16">
          <div className="flex w-max animate-marquee items-center gap-8 pr-8">
            {marqueeItems.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="inline-flex shrink-0 items-center gap-3 font-display text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/40"
              >
                <span className="text-gold/35" aria-hidden>
                  ·
                </span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-14 grid gap-4 sm:grid-cols-3 sm:gap-5 md:mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/25"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold transition-transform duration-500 group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold tracking-[0.12em] text-white">{pillar.title}</h3>
                <p className="font-elegant mt-2 text-sm italic leading-relaxed text-white/45">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] shadow-lg shadow-black/40
                ${item.size === "tall" ? "md:row-span-2" : ""}
                ${item.size === "wide" ? "md:col-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-2" : ""}
                ${i === 0 ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
              <div className="absolute left-0 top-0 flex w-full items-start justify-between p-4 sm:p-5">
                <span className="font-display text-[0.6rem] font-bold text-white/25 tabular-nums tracking-[0.35em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-gold/90 backdrop-blur-md">
                  Scene
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold">{item.alt}</p>
                <p className="mt-2 max-w-md font-elegant text-sm italic leading-snug text-white/55 sm:text-base">
                  {item.blurb}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.06] to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center font-elegant text-[0.65rem] italic text-white/35">
          Photography sourced from{" "}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/50 underline-offset-2 transition-colors hover:text-gold hover:underline"
          >
            Unsplash
          </a>{" "}
          — free to use under the Unsplash License.
        </p>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.07] via-transparent to-velvet/20 p-8 sm:mt-16 sm:p-10 md:mt-20"
        >
          <Quote className="absolute left-6 top-6 h-10 w-10 text-gold/20 sm:h-12 sm:w-12" aria-hidden />
          <blockquote className="relative z-10 pt-6 text-center font-elegant text-xl italic leading-relaxed text-white/85 sm:text-2xl">
            You do not remember the drink first — you remember how the room made you feel. That is the McSteeze
            effect.
          </blockquote>
          <figcaption className="relative z-10 mt-6 text-center text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold/60">
            The house mantra
          </figcaption>
        </motion.figure>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-radial-gold opacity-[0.12]" />
    </section>
  );
};

export default Gallery;
