import { useState } from "react";
import mod1 from "@/assets/module-1.jpg";
import mod2 from "@/assets/module-2.jpg";
import mod3 from "@/assets/module-3.jpg";
import mod4 from "@/assets/module-4.jpg";

const modules = [
  {
    img: mod1,
    number: "01",
    chapter: "Fundação",
    title: "Mentalidade do Top 1%",
    desc: "Reprograme sua mente para enxergar oportunidades onde a maioria vê obstáculo. Os princípios que separam quem fatura 6 dígitos de quem fica preso no zero.",
    aulas: "12 aulas",
    horas: "3h 40min",
  },
  {
    img: mod2,
    number: "02",
    chapter: "Tráfego orgânico",
    title: "Shopee Vídeo & TikTok Shop",
    desc: "O passo a passo exato pra dominar as duas plataformas que mais geram comissão hoje. Desde abrir conta até escalar para R$ 30 mil/mês sem investir em anúncios.",
    aulas: "28 aulas",
    horas: "9h 15min",
  },
  {
    img: mod3,
    number: "03",
    chapter: "Tráfego pago",
    title: "VSLs & Anúncios Lucrativos",
    desc: "Como criar VSLs que vendem no automático e estruturar campanhas no Meta Ads que multiplicam cada R$ 1 investido em R$ 5 de retorno.",
    aulas: "22 aulas",
    horas: "7h 50min",
  },
  {
    img: mod4,
    number: "04",
    chapter: "Escala & comunidade",
    title: "Construindo seu Império",
    desc: "Equipe, processos, automações e tudo o que ninguém te conta sobre transformar uma renda em um negócio que escala sem você.",
    aulas: "18 aulas",
    horas: "6h 20min",
  },
];

export const Modules = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="modulos" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,77,0.12),transparent_62%)]" />

      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-6 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">A trilha</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              4 módulos. <span className="italic text-gradient-gold">Um caminho.</span>
              <br />Zero achismo.
            </h2>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">+80 aulas</span> • <span className="text-foreground font-semibold">27h</span> de conteúdo prático
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          {/* Lista de módulos */}
          <div className="space-y-3">
            {modules.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left group relative rounded-2xl p-5 transition-all duration-500 border ${
                  active === i
                    ? "bg-gradient-to-r from-primary/12 to-transparent border-primary/35 shadow-[0_8px_30px_-12px_rgba(255,184,77,0.28)]"
                    : "border-border/60 hover:border-primary/30 hover:bg-card/40"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`font-serif text-3xl transition-colors ${active === i ? "text-gradient-gold" : "text-muted-foreground"}`}>
                    {m.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">{m.chapter}</div>
                    <div className="font-serif text-lg sm:text-xl truncate">{m.title}</div>
                  </div>
                  <div className={`text-xs text-muted-foreground transition-transform ${active === i ? "translate-x-1 text-primary" : ""}`}>→</div>
                </div>
              </button>
            ))}
          </div>

          {/* Card preview */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/14 via-primary/8 to-transparent blur-3xl opacity-70" />
            <div key={active} className="relative glass-card rounded-3xl overflow-hidden animate-fade-up">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={modules[active].img} alt={modules[active].title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary px-3 py-1 rounded-full border border-primary/40 bg-background/60 backdrop-blur">
                    Módulo {modules[active].number}
                  </span>
                </div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <span className="h-20 w-20 rounded-full bg-cta/95 text-cta-foreground flex items-center justify-center shadow-[0_20px_60px_-10px_hsl(88_95%_55%/0.7)] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 ml-1"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                </button>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{modules[active].chapter}</div>
                <h3 className="font-serif text-3xl mb-3">{modules[active].title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{modules[active].desc}</p>
                <div className="flex items-center gap-6 text-sm pt-5 border-t border-border">
                  <div className="flex items-center gap-2"><span className="text-primary">▶</span> {modules[active].aulas}</div>
                  <div className="flex items-center gap-2"><span className="text-primary">◷</span> {modules[active].horas}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
