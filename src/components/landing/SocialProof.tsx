import { useEffect, useRef, useState } from "react";
import prova4 from "@/assets/Provas/4.jpg";
import prova5 from "@/assets/Provas/5.jpeg";
import prova6 from "@/assets/Provas/6.jpeg";
import prova7 from "@/assets/Provas/475413690_18391100800100995_8426596444896855734_n.jpeg";
import prova8 from "@/assets/Provas/528070686_18419047324100995_2448316399484532303_n.jpeg";
import provaVideo from "@/assets/Provas/1.mp4";

type Proof = {
  media: string;
  type: "image" | "video";
  tag: string;
  title: string;
  meta: string;
  amount?: string;
  rotate: string;
};

const proofs: Proof[] = [
  { media: prova4, type: "image", tag: "WhatsApp", title: '"Otimização e escala é aqui"', meta: "Aluno Thiago • hoje", rotate: "-rotate-2" },
  { media: prova5, type: "image", tag: "WhatsApp", title: '"Tamo escalando aquela ofertinha"', meta: "Aluno João • hoje", rotate: "rotate-2" },
  { media: prova6, type: "image", tag: "WhatsApp", title: '"Mudando realidades ❤️"', meta: "Aluno Reis • hoje", rotate: "-rotate-1" },
  { media: prova7, type: "image", tag: "WhatsApp", title: '"Vendas acontecendo todos os dias"', meta: "Mentorado João • hoje", rotate: "rotate-1" },
  { media: prova8, type: "image", tag: "WhatsApp", title: '"Mudando realidades ❤️"', meta: "Mentorado Reis • hoje", rotate: "-rotate-2" },
  { media: provaVideo, type: "video", tag: "Vídeo", title: '"Resultados reais em vídeo"', meta: "Alunos • prova social", rotate: "rotate-1" },
];

export const SocialProof = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const goPrev = () => setMobileIndex((prev) => (prev - 1 + proofs.length) % proofs.length);
  const goNext = () => setMobileIndex((prev) => (prev + 1) % proofs.length);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused) {
        el.scrollLeft += dt * 0.06; // ~60px/s
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  useEffect(() => {
    const id = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % proofs.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const list = [...proofs, ...proofs];

  return (
    <section id="provas" className="relative pt-16 pb-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(255,184,77,0.14),transparent_72%)]" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
            Mensagens novas todos os dias
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Enquanto você lê isso,
            <br />
            <span className="italic text-gradient-gold">alguém está faturando.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Não é sobre o que eu estou dizendo, é sobre o que eles estão alcançando:
          </p>
        </div>
      </div>

      <div className="px-4 pb-8 md:hidden">
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {proofs.map((p, i) => (
              <article key={`mobile-${i}`} className="relative w-full flex-shrink-0 px-1">
                <div className="glass-card relative aspect-[3/4] overflow-hidden rounded-3xl">
                  {p.type === "video" ? (
                    <video
                      src={p.media}
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={p.media} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent" />
                  {p.type !== "video" && (
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-primary/40 bg-background/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary backdrop-blur">
                        {p.tag}
                      </span>
                    </div>
                  )}
                  {p.amount && (
                    <div className="absolute top-4 right-4 rounded-full bg-cta/95 px-3 py-1.5 text-xs font-bold text-cta-foreground shadow-[0_8px_24px_-4px_hsl(88_95%_55%/0.6)]">
                      {p.amount}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="mb-1 font-serif text-xl leading-tight">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 border border-white/20 text-white backdrop-blur flex items-center justify-center"
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 border border-white/20 text-white backdrop-blur flex items-center justify-center"
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {proofs.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setMobileIndex(i)}
              className={`h-2 rounded-full transition-all ${mobileIndex === i ? "w-6 bg-primary" : "w-2 bg-white/30"}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="hidden gap-6 overflow-x-hidden px-6 py-10 md:flex"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}
      >
        {list.map((p, i) => (
          <article
            key={i}
            className={`group relative flex-shrink-0 w-[280px] sm:w-[320px] glass-card rounded-3xl overflow-hidden ${p.rotate} hover:rotate-0 hover:scale-105 transition-all duration-500 hover:ring-amber`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {p.type === "video" ? (
                <video
                  src={p.media}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={p.media} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              {p.type !== "video" && (
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary px-3 py-1 rounded-full border border-primary/40 bg-background/60 backdrop-blur">
                    {p.tag}
                  </span>
                </div>
              )}
              {p.amount && (
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cta/95 text-cta-foreground text-xs font-bold shadow-[0_8px_24px_-4px_hsl(88_95%_55%/0.6)]">
                  {p.amount}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl mb-1 leading-tight">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.meta}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
