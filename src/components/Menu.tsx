import { motion } from "framer-motion";
import { Flame, Utensils, Wheat, Sandwich, ChevronRight } from "lucide-react";
import banku from "@/assets/dish-banku-tilapia.jpg";
import jollof from "@/assets/dish-jollof.jpg";
import friedRice from "@/assets/dish-fried-rice.jpg";
import shawarma from "@/assets/dish-shawarma.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const dishes = [
  {
    icon: Flame,
    image: banku,
    name: "Banku & Tilapia",
    desc: "Grilled tilapia with smooth banku, fresh pepper and shito.",
    size: "lg",
  },
  {
    icon: Utensils,
    image: jollof,
    name: "Jollof Rice",
    desc: "Smoky, spicy, unmistakably Ghanaian.",
    size: "sm",
  },
  {
    icon: Wheat,
    image: friedRice,
    name: "Fried Rice",
    desc: "Wok-tossed rice loaded with veggies.",
    size: "sm",
  },
  {
    icon: Sandwich,
    image: shawarma,
    name: "Shawarma",
    desc: "Wrapped, stuffed and packed with flavor.",
    size: "md",
  },
];

const fullMenu = {
  "Main Courses": [
    { name: "Banku & Tilapia", price: "GH₵ 85", desc: "Grilled tilapia with smooth banku, fresh pepper and shito." },
    { name: "Jollof Rice", price: "GH₵ 65", desc: "Smoky, spicy, unmistakably Ghanaian." },
    { name: "Fried Rice", price: "GH₵ 60", desc: "Wok-tossed rice loaded with veggies." },
    { name: "Assorted Noodles", price: "GH₵ 70", desc: "Stir-fry noodles with chicken, beef and shrimp." },
    { name: "Grilled Chicken", price: "GH₵ 55", desc: "Quarter chicken served with your choice of side." },
    { name: "Pork Ribs", price: "GH₵ 95", desc: "Slow-roasted ribs with honey BBQ glaze." },
  ],
  "Starters & Snacks": [
    { name: "Shawarma", price: "GH₵ 45", desc: "Wrapped, stuffed and packed with flavor." },
    { name: "Spring Rolls", price: "GH₵ 30", desc: "Crispy rolls filled with seasoned vegetables." },
    { name: "Kebab (Beef/Chicken)", price: "GH₵ 25", desc: "Succulent grilled meat on skewers." },
    { name: "Chicken Wings", price: "GH₵ 50", desc: "6 pieces of spicy or honey glazed wings." },
    { name: "Yam Chips & Gizzard", price: "GH₵ 45", desc: "Fried yam served with spicy gizzards." },
  ],
  "Drinks & Cocktails": [
    { name: "Steeze Signature", price: "GH₵ 40", desc: "Our house special blend of tropical fruits." },
    { name: "Classic Mojito", price: "GH₵ 35", desc: "Fresh mint, lime, sugar and soda water." },
    { name: "Local Juice", price: "GH₵ 20", desc: "Sobolo or Lamugin - authentic local taste." },
    { name: "Soft Drinks", price: "GH₵ 15", desc: "Various carbonated drinks." },
    { name: "Craft Beer", price: "GH₵ 25", desc: "Chilled local and imported selections." },
  ]
};

const Menu = () => {
  return (
    <section id="menu" className="relative border-t border-white/[0.04] bg-gradient-to-b from-[#06040c] to-[#040208] py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="container relative mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:mb-20 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="section-kicker mb-6 !tracking-[0.5em]">The gastronomy</p>
            <h2 className="font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl md:text-7xl">
              Flavors that{" "}
              <span className="font-serif italic text-gradient-gold">command</span> respect.
            </h2>
          </motion.div>
          
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 border-b border-gold/25 pb-2 text-sm font-bold uppercase tracking-[0.28em] text-champagne/80 transition-colors hover:border-gold/50 hover:text-gold"
              >
                See full menu <ChevronRight className="h-4 w-4" />
              </motion.button>
            </DialogTrigger>
            <DialogContent className="flex h-[90vh] max-w-4xl flex-col overflow-hidden border border-gold/20 bg-[#050308] p-0 text-white shadow-[0_0_80px_-20px_hsl(42_78%_55%/_0.35)]">
              <div className="border-b border-white/10 bg-gradient-to-r from-gold/[0.08] to-transparent p-8 pb-5">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl font-bold tracking-[0.12em] text-gradient-gold sm:text-4xl">
                    McSteeze lounge menu
                  </DialogTitle>
                </DialogHeader>
              </div>
              <ScrollArea className="flex-1 p-8 pt-4">
                <div className="grid md:grid-cols-2 gap-12">
                  {Object.entries(fullMenu).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-gold font-bold uppercase tracking-widest text-base mb-6 border-l-2 border-gold pl-4">{category}</h3>
                      <div className="space-y-6">
                        {items.map((item) => (
                          <div key={item.name} className="group">
                            <div className="flex justify-between items-baseline mb-1">
                              <h4 className="font-display text-xl font-bold group-hover:text-gold transition-colors">{item.name}</h4>
                              <span className="text-gold font-bold text-base">{item.price}</span>
                            </div>
                            <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t border-white/10 bg-gold/[0.04] p-6 text-center">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/45">
                  Prices may change based on availability.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Bento Grid */}
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-4">
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative h-[350px] overflow-hidden rounded-3xl border border-white/[0.07] bg-[#050308] shadow-2xl md:h-full
                ${dish.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                ${dish.size === 'md' ? 'md:col-span-2 md:row-span-1' : ''}
                ${dish.size === 'sm' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg glass-gold text-gold">
                    <dish.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white transition-premium group-hover:text-gold">
                    {dish.name}
                  </h3>
                </div>
                <p className="text-base text-white/50 max-w-xs group-hover:text-white/80 transition-premium">
                  {dish.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
