const stats = [
  { v: "+350", l: "alunos ativos" },
  { v: "R$ 2.1M", l: "faturados pelo mentor" },
  { v: "24/7", l: "suporte ativo" },
  { v: "Meet", l: "call toda semana" },
];

export const Stats = () => (
  <section className="py-20 border-y border-primary/10 bg-card/30">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gradient-gold mb-2 transition-transform group-hover:scale-105">{s.v}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
