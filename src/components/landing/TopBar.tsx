import { useEffect, useState } from "react";

const targetTime = () => {
  const stored = localStorage.getItem("offer_deadline");
  if (stored) return parseInt(stored);
  const t = Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 47;
  localStorage.setItem("offer_deadline", t.toString());
  return t;
};

export const TopBar = () => {
  const [end] = useState(targetTime);
  const [diff, setDiff] = useState(end - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(Math.max(0, end - Date.now())), 1000);
    return () => clearInterval(id);
  }, [end]);

  const h = Math.floor(diff / 3.6e6);
  const m = Math.floor((diff % 3.6e6) / 6e4);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full border-b border-primary/20 backdrop-blur-xl bg-background/80">
      <div className="container flex items-center justify-center gap-3 py-2.5 text-xs sm:text-sm">
        <span className="hidden sm:inline text-muted-foreground uppercase tracking-[0.18em]">
          Últimas vagas
        </span>
        <span className="sm:hidden text-muted-foreground uppercase tracking-widest">Últimas vagas</span>
        <div className="flex items-center gap-1 font-mono font-semibold text-gradient-gold text-base">
          <span>{pad(h)}</span><span className="opacity-50">:</span>
          <span>{pad(m)}</span>
        </div>
        <a href="#oferta" className="hidden md:inline-block text-primary font-semibold hover:underline underline-offset-4">
          Garantir vaga →
        </a>
      </div>
    </div>
  );
};
