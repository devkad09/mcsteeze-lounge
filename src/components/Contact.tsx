import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Send } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit us",
    content: "Kasoa, Opposite KAAF University, Ghana",
    link: "https://maps.google.com?q=KAAF+University+Kasoa",
    accent: "from-gold/20 to-amber-600/10",
  },
  {
    icon: Phone,
    title: "Call direct",
    content: "0592 921 133",
    link: "tel:0592921133",
    accent: "from-champagne/15 to-gold/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Chat with us now",
    link: "https://wa.me/233549910292",
    accent: "from-gold/15 to-velvet/30",
  },
  {
    icon: Mail,
    title: "Email us",
    content: "issakafelix57@gmail.com",
    link: "mailto:issakafelix57@gmail.com",
    accent: "from-velvet/40 to-gold/10",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.04] py-28 sm:py-36">
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/[0.04] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-kicker mb-6 w-fit">Get in touch</p>
            <h2 className="font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl md:text-7xl">
              Let&apos;s start something <span className="font-serif italic text-gradient-gold">epic</span>.
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  href={card.link}
                  target={card.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ borderColor: "rgba(212, 175, 55, 0.35)" }}
                  className="card-premium group p-6"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${card.accent} text-gold transition-transform duration-500 group-hover:scale-105`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-[0.1em] text-white transition-colors group-hover:text-champagne">
                    {card.title}
                  </h3>
                  <p className="font-elegant mt-2 text-base italic text-white/45 transition-colors group-hover:text-white/65">
                    {card.content}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/30">Follow the movement</p>
              <div className="flex flex-wrap gap-3">
                {["Instagram", "TikTok", "Snapchat"].map((social) => (
                  <motion.a
                    key={social}
                    href={`https://${social.toLowerCase()}.com/Mcsteeze`}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/55 transition-colors hover:border-gold/35 hover:text-gold"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gold/[0.07] blur-[90px]" />
            <div className="group card-premium relative h-[500px] overflow-hidden p-2">
              <iframe
                title="McSteeze Lounge location"
                src="https://www.google.com/maps?q=KAAF+University+Kasoa+Ghana&output=embed"
                className="h-full w-full rounded-2xl opacity-70 contrast-125 transition-all duration-700 [filter:grayscale(1)_invert(1)] group-hover:opacity-85 group-hover:[filter:grayscale(0)_invert(0)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-5 left-5 right-5 flex translate-y-3 items-center justify-between rounded-xl border border-white/10 bg-black/70 p-5 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <h4 className="font-display text-base font-bold text-white">Find us fast</h4>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-white/40">Opposite KAAF University</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-600 text-black shadow-gold">
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
