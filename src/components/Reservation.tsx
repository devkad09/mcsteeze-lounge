import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Calendar, Users, MessageCircle, Clock, Info } from "lucide-react";
import { toast } from "sonner";
import { usePaystackPayment } from "react-paystack";

const WHATSAPP_NUMBER = "233549910292";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  date: z.string().min(1, "Pick a date & time"),
  guests: z.coerce.number().int().min(1, "At least 1 guest").max(50, "Max 50 guests"),
  notes: z.string().trim().max(300, "Keep notes under 300 characters").optional(),
});

const Reservation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "2",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const config = {
    reference: (new Date()).getTime().toString(),
    email: form.email,
    amount: 10000, // 100 GHS in pesewas
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first ?? "Please check your details");
      return;
    }

    initializePayment({
      onSuccess: (reference: any) => {
        const { name, phone, date, guests, notes } = parsed.data;
        const prettyDate = new Date(date).toLocaleString(undefined, {
          dateStyle: "full",
          timeStyle: "short",
        });
        const message =
          `👑 *New Reservation — Mcsteeze*\n\n` +
          `*Name:* ${name}\n` +
          `*Phone:* ${phone}\n` +
          `*Date & Time:* ${prettyDate}\n` +
          `*Guests:* ${guests}\n` +
          (notes ? `*Notes:* ${notes}\n` : "") +
          `\n*Payment Ref:* ${reference.reference}\n` +
          `*Deposit Paid:* GHS 100`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        toast.success("Payment successful! Opening WhatsApp to confirm your reservation…");
      },
      onClose: () => {
        toast.error("Payment was cancelled. You need to pay the deposit to secure your table.");
      }
    });
  };

  const minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  return (
    <section id="reserve" className="relative overflow-hidden border-t border-white/[0.04] bg-gradient-to-b from-[#040208] to-[#06040f] py-28 sm:py-36">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-kicker mb-6 w-fit">Reservations</p>
            <h2 className="font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl md:text-7xl">
              Secure your <br />
              <span className="font-serif italic text-gradient-gold">private table</span>.
            </h2>
            <p className="font-elegant mt-8 max-w-md text-xl italic leading-relaxed text-white/50">
              The pinnacle of nightlife — intimate evenings or royal celebrations, tailored to your taste.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Clock, text: "Fast confirmation via WhatsApp" },
                { icon: Users, text: "VIP booths for groups up to 10" },
                { icon: Info, text: "Special arrangements on request" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/72">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-base font-medium tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="card-premium relative overflow-hidden p-8 md:p-12"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-[90px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                    required
                  />
                </Field>
                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                    required
                  />
                </Field>
                <Field label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                    required
                  />
                </Field>
                <Field label="Date & Time">
                  <input
                    name="date"
                    type="datetime-local"
                    value={form.date}
                    onChange={handleChange}
                    min={minDate}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 [color-scheme:dark]"
                    required
                  />
                </Field>
                <Field label="Guests">
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange as any}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                    required
                  >
                    {[1, 2, 4, 6, 8, 10, 15, 20].map(n => (
                      <option key={n} value={n} className="bg-royal-black text-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Special Requests">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Birthday, Anniversary, or Drink preferences..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                />
              </Field>

              <button
                type="submit"
                className="w-full button-premium py-4 flex items-center justify-center gap-3 text-base tracking-[0.2em]"
              >
                <MessageCircle className="w-5 h-5" />
                PAY DEPOSIT & RESERVE
              </button>
              
              <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/35">
                GHS 100 deposit required
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <label className="ml-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold/85">{label}</label>
    {children}
  </div>
);

export default Reservation;
