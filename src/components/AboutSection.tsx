import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-wide-ui text-muted-foreground mb-4 block">O studiu</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-display mb-8">
            Nie projektujemy tylko tego, co widać.
            <span className="italic text-accent"> Projektujemy to, co działa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            Krzysztofiak Studio łączy wrażliwość estetyczną z techniczną precyzją. Każdy projekt
            rozpoczynamy od dogłębnej analizy przestrzeni, potrzeb i stylu życia naszych klientów.
          </p>
          <p>
            Nasze doświadczenie w odbiorach technicznych pozwala nam przewidywać problemy, których
            inni nie biorą pod uwagę — od wadliwych instalacji po nieergonomiczne układy pomieszczeń.
          </p>
          <p>
            Wierzymy, że piękne wnętrze musi być przede wszystkim funkcjonalne. Dlatego każdy
            nasz projekt to połączenie wizji artystycznej z inżynierską dokładnością.
          </p>
          <div className="pt-4 flex gap-12">
            <div>
              <span className="text-4xl font-serif text-foreground">150+</span>
              <p className="text-sm text-muted-foreground mt-1">zrealizowanych projektów</p>
            </div>
            <div>
              <span className="text-4xl font-serif text-foreground">8</span>
              <p className="text-sm text-muted-foreground mt-1">lat doświadczenia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
