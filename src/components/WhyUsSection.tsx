import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Przewidywanie problemów",
    desc: "Dzięki doświadczeniu w odbiorach technicznych widzimy to, co inni przeoczają — zanim stanie się kosztownym problemem.",
  },
  {
    title: "Ergonomia i funkcjonalność",
    desc: "Każdy centymetr przestrzeni jest zaplanowany pod kątem wygody użytkowania i codziennych nawyków.",
  },
  {
    title: "Doświadczenie techniczne",
    desc: "Łączymy zmysł estetyczny z wiedzą inżynierską. Znamy normy, materiały i technologie budowlane.",
  },
  {
    title: "Kompleksowa obsługa",
    desc: "Od pierwszej wizualizacji po nadzór autorski na budowie — jesteśmy z Tobą na każdym etapie.",
  },
  {
    title: "Transparentność kosztów",
    desc: "Jasne wyceny, brak ukrytych opłat. Zawsze wiesz, na co wydajesz swoje pieniądze.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-wide-ui text-muted-foreground mb-4 block">Dlaczego my</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-display max-w-xl">
            Korzyści, których <span className="italic text-accent">nie znajdziesz</span> gdzie indziej
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              <CheckCircle2 size={20} strokeWidth={1} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
