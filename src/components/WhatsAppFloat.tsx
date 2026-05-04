import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/233549910292"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with McSteeze on WhatsApp"
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.94 }}
    className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/25 via-[#0a0812] to-[#0a0812] text-gold shadow-[0_12px_40px_-8px_hsl(42_78%_55%/_0.45)] backdrop-blur-md transition-shadow duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_-10px_hsl(38_95%_62%/_0.35)]"
  >
    <span className="absolute inset-0 rounded-full bg-gold/15 blur-md" aria-hidden />
    <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
  </motion.a>
);

export default WhatsAppFloat;
