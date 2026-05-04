import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-background text-white">
    <div className="pointer-events-none fixed inset-0 z-0 bg-mesh-ambient opacity-90" aria-hidden />
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[70vh] bg-gradient-to-b from-gold/[0.07] to-transparent" aria-hidden />
    <div className="noise-overlay" />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <div className="relative border-t border-white/[0.04] bg-gradient-to-b from-background via-background to-[#05040a]">
        <About />
        <Menu />
        <Gallery />
        <Reservation />
        <Contact />
      </div>
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
