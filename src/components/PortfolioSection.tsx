import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: portfolio1, alt: "Sypialnia — projekt minimalistyczny", span: "md:col-span-8", aspect: "aspect-video" },
  { src: portfolio2, alt: "Kuchnia — marmur i drewno", span: "md:col-span-4", aspect: "aspect-square" },
  { src: portfolio3, alt: "Łazienka — kamień naturalny", span: "md:col-span-4", aspect: "aspect-square" },
  { src: portfolio4, alt: "Salon z jadalnią — open space", span: "md:col-span-8", aspect: "aspect-video" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-wide-ui text-muted-foreground mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-display">Wybrane realizacje</h2>
          </div>
          <span className="text-sm tracking-wide-ui uppercase text-muted-foreground hidden md:block font-mono">
            2021 — 2025
          </span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${img.span} ${img.aspect} overflow-hidden cursor-pointer group`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Zamknij"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
