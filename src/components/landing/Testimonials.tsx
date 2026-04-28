const items = [
  { name: "Priscila S.", role: "Aluna desde 2024", text: "Comecei do absoluto zero, sem nenhuma experiência. Em 3 meses fiz minha primeira venda de R$ 500. Hoje já faturei mais de R$ 50 mil. A mentoria literalmente mudou minha vida.", stars: 5 },
  { name: "Cassiano R.", role: "Ex-CLT", text: "Tudo que ele ensina aqui é aplicável. Já comprei vários cursos antes e nada se compara. O suporte é absurdo, sempre que travo alguém me ajuda em minutos.", stars: 5 },
  { name: "Ana Beatriz", role: "Mãe e empreendedora", text: "Consegui sair do meu emprego CLT depois de 8 meses dentro da mentoria. Hoje trabalho de casa, com meu filho do lado. Gratidão eterna.", stars: 5 },
  { name: "Rafael M.", role: "Estudante", text: "Tinha 19 anos e R$ 0 no bolso. Aplicando o método consegui R$ 12 mil no primeiro mês com Shopee Vídeo. Não acreditei até ver na conta.", stars: 5 },
];

export const Testimonials = () => (
  <section className="py-24 lg:py-36 relative overflow-hidden">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary">Histórias reais</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Quem aplicou,<br /><span className="italic text-gradient-gold">transformou tudo</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((t, i) => (
          <figure key={i} className="glass-card rounded-3xl p-7 lg:p-8 relative hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-6 right-6 font-serif text-7xl text-primary/15 leading-none">"</div>
            <div className="flex gap-1 mb-4">
              {Array.from({length: t.stars}).map((_, k) => <span key={k} className="text-primary text-sm">★</span>)}
            </div>
            <blockquote className="text-foreground/90 leading-relaxed mb-6 relative">
              {t.text}
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-ember flex items-center justify-center font-serif text-primary-foreground">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
