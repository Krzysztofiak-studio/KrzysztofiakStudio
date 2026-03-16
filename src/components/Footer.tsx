const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-2xl font-serif tracking-display">
        STUDIO<span className="font-light italic text-accent">Miarowe</span>
      </span>

      <div className="flex gap-6">
        {["Instagram", "Facebook", "Pinterest"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-xs uppercase tracking-wide-ui text-muted-foreground hover:text-foreground transition-colors"
          >
            {s}
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground tracking-wide-ui uppercase">
        © 2025 Studio Miarowe. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
);

export default Footer;
