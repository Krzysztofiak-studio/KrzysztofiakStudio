import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const HeroSection = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8 tracking-display">
          Piękno <br />
          <span className="italic text-accent">wymierzone.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
          Projektujemy wnętrza, które zachwycają. Przeprowadzamy odbiory, które
          chronią Twoją inwestycję. Połączenie wizji z techniczną precyzją.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 hover:bg-foreground/90 transition-all"
        >
          <span className="uppercase tracking-wide-ui text-sm">Skontaktuj się</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative aspect-[4/5] overflow-hidden shadow-gallery"
      >
        <img
          src={heroImage}
          alt="Eleganckie wnętrze zaprojektowane przez Studio Miarowe"
          className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          loading="eager"
        />
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-[1px] h-16 bg-border"
      />
    </div>
  </header>
);

export default HeroSection;
