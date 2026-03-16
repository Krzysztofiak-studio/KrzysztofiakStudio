import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-wide-ui text-muted-foreground mb-4 block">Kontakt</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-display mb-8">Zacznijmy projekt.</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Masz pytania dotyczące odbioru technicznego lub chcesz omówić wizję swojego wnętrza? Napisz do nas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Phone size={18} strokeWidth={1} />
                </div>
                <span className="text-foreground">+48 500 000 000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Mail size={18} strokeWidth={1} />
                </div>
                <span className="text-foreground">kontakt@krzysztofiak.pl</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1} />
                </div>
                <span className="text-foreground">Warszawa, Polska</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-serif mb-4 tracking-display">Dziękujemy!</h3>
                  <p className="text-muted-foreground">Odezwiemy się najszybciej jak to możliwe.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Imię"
                    required
                    className="w-full bg-transparent border-b border-border py-4 focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-border py-4 focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefon (opcjonalnie)"
                  className="w-full bg-transparent border-b border-border py-4 focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <textarea
                  placeholder="Wiadomość"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-border py-4 focus:border-foreground outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="group w-full bg-primary text-primary-foreground py-5 uppercase tracking-wide-ui text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-3"
                >
                  Wyślij zapytanie
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
