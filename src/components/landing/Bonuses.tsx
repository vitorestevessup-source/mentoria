const bonuses = [
  { tag: "Bônus #01", title: "Desafio Mensal com Premiação", desc: "Participe de desafios todos os meses com prêmios em dinheiro para os melhores alunos.", value: "R$ 497" },
  { tag: "Bônus #02", title: "Banco de Criativos Prontos", desc: "Acesso a um canal exclusivo com vídeos editados, copies e materiais para você só usar.", value: "R$ 997" },
  { tag: "Bônus #03", title: "Sorteios e Premiações", desc: "Sorteios mensais de equipamentos, mentorias 1:1 e produtos para acelerar seu negócio.", value: "R$ 1.497" },
  { tag: "Bônus #04", title: "Comunidade VIP no Telegram", desc: "Networking real com alunos que já faturam 5 e 6 dígitos, dúvidas tiradas em minutos.", value: "R$ 397" },
];

export const Bonuses = () => (
  <section className="relative py-24 lg:py-36 overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,184,77,0.12),transparent_72%)]" />

    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary">Bônus exclusivos</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Mais de <span className="text-gradient-gold italic">R$ 3.388</span> em bônus
          <br />pra acelerar seu resultado
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {bonuses.map((b, i) => (
          <div key={i} className="group relative glass-card rounded-3xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:ring-amber">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/8 blur-3xl group-hover:bg-primary/14 transition-colors" />
            <div className="relative flex items-start justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold px-3 py-1 rounded-full border border-primary/40">
                {b.tag}
              </span>
              <div className="text-right">
                <div className="text-xs text-muted-foreground line-through">{b.value}</div>
                <div className="text-xs text-cta font-bold uppercase tracking-wider">Grátis</div>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-3 leading-tight">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
