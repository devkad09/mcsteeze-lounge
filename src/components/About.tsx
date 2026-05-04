import { motion } from "framer-motion";
import { Crown, Gem, Wine, Zap } from "lucide-react";

const features = [
  {
    icon: Wine,
    title: "Premium spirits",
    desc: "A curated collection of the world's finest liquors and signature cocktails.",
    color: "from-amber-500/25 to-gold/15",
  },
  {
    icon: Gem,
    title: "Elite ambience",
    desc: "Moody lighting and bespoke interiors designed for the ultimate nightlife.",
    color: "from-velvet/50 to-gold/10",
  },
  {
    icon: Crown,
    title: "VIP service",
    desc: "Unparalleled hospitality that treats every guest with royal distinction.",
    color: "from-gold/25 to-amber-600/15",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gold/[0.06] to-transparent" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-velvet/30 blur-[100px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-kicker mb-8">
              <Zap className="h-3.5 w-3.5 text-gold" aria-hidden />
              <span>The legend of McSteeze</span>
            </div>

            <h2 className="font-display text-5xl font-bold leading-[1.08] tracking-[0.06em] text-white sm:text-6xl md:text-7xl">
              A sanctuary for the <br />
              <span className="font-serif text-5xl italic text-transparent sm:text-6xl md:text-7xl bg-gradient-to-r from-champagne/95 via-gold to-champagne/80 bg-clip-text">
                extraordinary
              </span>
              .
            </h2>

            <p className="font-elegant mt-8 max-w-xl text-xl italic leading-relaxed text-white/50 md:text-2xl">
              McSteeze is not only a destination — it is a statement. Velvet, crystal, and rhythm come together for
              those who expect the night to remember their name.
            </p>

            <div className="mt-12 flex flex-wrap gap-12 border-t border-white/10 pt-10">
              {[
                { n: "5K+", l: "Guests served" },
                { n: "100+", l: "Premium labels" },
                { n: "4.9", l: "Star rating" },
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="font-display text-4xl font-bold text-gradient-gold">{stat.n}</p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/38">{stat.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card-premium group flex cursor-default gap-6"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${feature.color} shadow-lg transition-premium group-hover:border-gold/40 group-hover:shadow-gold`}
                >
                  <feature.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-[0.08em] text-white transition-colors group-hover:text-champagne">
                    {feature.title}
                  </h3>
                  <p className="font-elegant mt-2 text-lg italic leading-relaxed text-white/45">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
