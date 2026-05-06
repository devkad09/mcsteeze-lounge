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
    currency: "GHS",
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_e1010cf7ab51d1155c4918df44b459b174c51710',
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
        toast.success("Payment successful! Opening WhatsApp to confirm your reservation…");
        window.location.href = url;
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
    <section id="reserve" className="relative overflow-hidden border-t border-white/[0.04] bg-[#020104] py-28 sm:py-36">
      {/* Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Promotional Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-cyan-500/5 opacity-50 transition-opacity group-hover:opacity-100" />
            
            <div className="relative z-10">
              <p className="section-kicker mb-6 w-fit text-gold/80">Experience the Extraordinary</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                THE <span className="text-gradient-gold">MCSTEEZE</span> <br />
                <span className="text-cyan-400">LOUNGE</span>
              </h2>
              
              <p className="font-elegant mt-8 max-w-md text-lg italic leading-relaxed text-white/60">
                Indulge in unparalleled luxury. Book your exclusive escape at our premier, members-only lounge.
              </p>
              <p className="font-elegant mt-4 max-w-md text-base text-white/40">
                Enjoy curated cocktails, gourmet cuisine, and an atmosphere of refined elegance. Members receive priority access and bespoke services.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  "Fast confirmation via WhatsApp",
                  "VIP booths for groups up to 10",
                  "Special arrangements on request",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                    <span className="text-base font-medium tracking-wide text-white/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12 shadow-2xl"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />

            <h3 className="relative z-10 font-display text-2xl font-bold uppercase tracking-widest text-white/90 mb-8">
              Reserve Your Table
            </h3>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Alex Thorne"
                    className="input-glass"
                    required
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex.t@email.com"
                    className="input-glass"
                    required
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="input-glass"
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
                    className="input-glass [color-scheme:dark]"
                    required
                  />
                </Field>
                <Field label="Party Size">
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange as any}
                    className="input-glass"
                    required
                  >
                    {[1, 2, 4, 6, 8, 10, 15, 20].map(n => (
                      <option key={n} value={n} className="bg-zinc-900 text-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
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
                  className="input-glass resize-none"
                />
              </Field>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-gold to-cyan-500 p-px font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-3 rounded-[inherit] bg-[#020104]/90 px-8 py-5 transition-colors group-hover:bg-transparent">
                  <span className="text-sm tracking-[0.3em] text-white uppercase">Confirm Reservation</span>
                </div>
              </button>

              <div className="flex flex-col items-center gap-2">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-gold/60">
                  GHS 100 Deposit Required
                </p>
                <div className="h-px w-12 bg-white/10" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-glass {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.875rem 1.25rem;
          color: white;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .input-glass:focus {
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
          background: rgba(255, 255, 255, 0.05);
        }
        .input-glass::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <label className="ml-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">{label}</label>
    {children}
  </div>
);

export default Reservation;
