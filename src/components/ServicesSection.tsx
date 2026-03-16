import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Ruler, Home } from "lucide-react";

const services = [
  {
    title: "Projektowanie Wnętrz",
    icon: <PenTool size={24} strokeWidth={1} />,
    desc: "Kompleksowe procesy od koncepcji po nadzór autorski. Tworzymy przestrzenie, które odzwierciedlają Twój styl życia.",
  },
  {
    title: "Odbiory Techniczne",
    icon: <Ruler size={24} strokeWidth={1} />,
    desc: "Wykrywamy błędy deweloperskie, których nie widać gołym okiem. Chronimy Twoją inwestycję od pierwszego dnia.",
  },
  {
    title: "Doradztwo Funkcjonalne",
    icon: <Home size={24} strokeWidth={1} />,
    desc: "Optymalizacja układu ścian i instalacji przed zakupem. Pomagamy podjąć świadome decyzje.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-wide-ui text-muted-foreground mb-4 block">Usługi</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-display">Co robimy</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background p-10 md:p-12 hover:bg-secondary transition-colors duration-500 group"
          >
            <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
              {s.icon}
            </div>
            <h3 className="text-2xl font-serif mb-4 tracking-display">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
