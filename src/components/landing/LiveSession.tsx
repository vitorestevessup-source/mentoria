import { useEffect, useState } from "react";
import mentor from "@/assets/fundo.png";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/links";

const chatSeed = [
  { name: "Camila", msg: "Que aula incrível 🔥", color: "from-primary to-ember" },
  { name: "Rafael", msg: "Tô aplicando agora!", color: "from-ember to-deep-red" },
  { name: "Beatriz", msg: "Primeira venda saiu HOJE 🎉", color: "from-cta to-primary" },
  { name: "João", msg: "Vale cada centavo essa mentoria", color: "from-primary to-gold" },
  { name: "Larissa", msg: "Anotando tudo aqui ✍️", color: "from-gold to-ember" },
  { name: "Pedro", msg: "Bora pra cima!! 🚀", color: "from-cta to-gold" },
  { name: "Marina", msg: "Faturei R$ 8k esse mês 🤯", color: "from-primary to-cta" },
];

export const LiveSession = () => {
  const [viewers, setViewers] = useState(1247);
  const [chat, setChat] = useState(chatSeed.slice(0, 4));
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const v = setInterval(() => {
      setViewers((n) => Math.max(800, n + Math.floor(Math.random() * 11) - 4));
    }, 1800);
    const c = setInterval(() => {
      setTick((t) => t + 1);
      setChat((prev) => {
        const next = chatSeed[Math.floor(Math.random() * chatSeed.length)];
        return [...prev.slice(-4), { ...next, msg: next.msg }];
      });
    }, 2200);
    return () => { clearInterval(v); clearInterval(c); };
  }, []);

  return (
    <section id="live" className="relative pt-8 pb-8 lg:pt-12 lg:pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,184,77,0.12),transparent_72%)]" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Suporte semanal <span className="italic text-gradient-gold">ao vivo</span>
            <br />direto comigo, sem intermediário.
          </h2>
          <p className="text-muted-foreground text-lg">
            Toda semana você entra em uma sala fechada com outros alunos e tira suas dúvidas em tempo real. Nada de chatbot. Nada de FAQ. Eu, ao vivo, respondendo você.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/16 via-primary/8 to-transparent blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-1 glass-card rounded-3xl overflow-hidden ring-1 ring-primary/20">
            {/* Player */}
            <div className="relative aspect-video lg:aspect-auto bg-black">
              <img src={mentor} alt="Mentoria ao vivo" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* LIVE badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-md bg-destructive text-destructive-foreground font-bold text-xs uppercase tracking-wider shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                AO VIVO
              </div>

              {/* Viewers */}
              <div className="absolute top-5 right-5 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur text-xs font-semibold flex items-center gap-2">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>
                {viewers.toLocaleString("pt-BR")} assistindo
              </div>

              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Sessão #142</div>
                <h3 className="font-serif text-2xl lg:text-3xl mb-2">Como escalar de R$ 5k para R$ 30k em 90 dias</h3>
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-ember" />
                  <span>com Kaua Freitas</span>
                  <span>•</span>
                  <span>1h 12min</span>
                </div>
              </div>

              {/* Equalizer */}
              <div className="absolute bottom-6 right-6 flex items-end gap-1 h-8">
                {[0,1,2,3,4].map((i) => (
                  <span
                    key={i}
                    className="w-1 bg-cta rounded-full animate-glow-pulse"
                    style={{ height: `${30 + ((tick + i) % 4) * 18}%`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="bg-card/80 backdrop-blur p-5 lg:p-6 flex flex-col min-h-[420px]">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                <div className="font-serif text-lg">Chat ao vivo</div>
                <span className="text-[10px] uppercase tracking-wider text-cta font-bold">● Online</span>
              </div>

              <div className="flex-1 space-y-3 overflow-hidden">
                {chat.map((c, i) => (
                  <div key={`${tick}-${i}`} className="flex items-start gap-3 animate-fade-up">
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-xs font-bold text-primary-foreground`}>
                      {c.name[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-primary mb-0.5">{c.name}</div>
                      <div className="text-sm text-foreground/90 break-words">{c.msg}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <Button asChild className="btn-cta w-full h-12 rounded-full font-bold">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Quero participar das lives →</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -left-4 sm:-left-8 bottom-10 hidden md:block glass-card rounded-2xl p-4 animate-float ring-amber">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Próxima live</div>
            <div className="text-lg font-serif text-gradient-gold">Terça • 20h</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.1] text-foreground">
            <span className="inline-block px-2 py-1 mr-2 bg-gradient-to-r from-[#A63D1E] to-[#7B2914] text-white">
              Comece hoje
            </span>
            a construir
            <br />a vida que voce sempre
            <br />imaginou viver.
          </h3>
        </div>
      </div>
    </section>
  );
};
