import mentor from "@/assets/im2.jpg";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/links";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden grain bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_10%/0.35),transparent_55%),linear-gradient(180deg,#000_0%,#0f0f0f_100%)]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(255,167,38,0.14)_0%,rgba(255,167,38,0)_70%)] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[320px] w-[320px] bg-[radial-gradient(circle,rgba(255,184,77,0.12)_0%,rgba(255,184,77,0)_72%)] blur-3xl" />
      </div>

      <div className="container pt-12 pb-10 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-up text-center lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#FFB84D]/35 bg-[#121212]/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-[#FFB84D] backdrop-blur lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFA726] animate-glow-pulse" />
              Turma de Maio — Vagas Limitadas
            </div>

            <h1 className="mx-auto max-w-fit font-serif text-3xl leading-[1.02] tracking-tight text-white sm:text-5xl lg:mx-0 lg:max-w-none lg:text-6xl xl:text-7xl">
              <span className="whitespace-nowrap">De vendedor de bala</span>
              <br />
              <span className="whitespace-nowrap">
                a{" "}
                <span className="bg-[linear-gradient(90deg,#FFB84D,#FFA726)] bg-clip-text text-transparent [text-shadow:0_0_12px_rgba(255,184,77,0.35)]">
                  +R$2 milhões
                </span>
              </span>
              <br />
              <span className="text-foreground/90">com vendas online.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[#bfbfbf] sm:text-xl">
              Aprenda o método exato que usei pra sair do zero e construir uma operação lucrativa no digital, mesmo começando do absoluto zero.
            </p>

            {/* Visual mobile (acima da CTA) */}
            <div className="relative mx-auto max-w-sm animate-scale-in lg:hidden">
              <div className="absolute -inset-5 bg-[radial-gradient(circle_at_70%_35%,rgba(255,184,77,0.22)_0%,rgba(255,184,77,0)_65%)] blur-3xl opacity-70" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,184,77,0.1)]">
                <img
                  src={mentor}
                  alt="Mentor digital especialista em afiliados"
                  className="h-full w-full object-cover grayscale contrast-110 brightness-[0.92]"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="mb-2 text-xs uppercase tracking-[0.3em] text-white/90">Por</div>
                  <div className="font-serif text-2xl text-[#FFB84D] lg:text-3xl">Kaua Freitas</div>
                  <div className="text-sm text-[#bfbfbf]">Mentor • +R$ 2M faturados</div>
                </div>
              </div>

              <div className="absolute -left-4 top-1/3 animate-float rounded-2xl border border-[#FFB84D]/35 bg-[#0b0b0b]/85 p-4 shadow-[0_0_20px_rgba(255,184,77,0.15)] backdrop-blur sm:-left-10">
                <div className="text-xs uppercase tracking-wider text-[#bfbfbf]">Faturamento</div>
                <div className="font-serif text-2xl text-[#FFB84D] [text-shadow:0_0_12px_rgba(255,184,77,0.35)]">R$ 2.1M+</div>
              </div>
              <div
                className="absolute -right-4 bottom-24 animate-float rounded-2xl border border-[#FFB84D]/35 bg-[#0b0b0b]/85 p-4 shadow-[0_0_20px_rgba(255,184,77,0.15)] backdrop-blur sm:-right-6"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs uppercase tracking-wider text-[#bfbfbf]">Alunos</div>
                <div className="font-serif text-[2rem] leading-none text-[#FFB84D] [text-shadow:0_0_12px_rgba(255,184,77,0.35)]">350+</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-[#bfbfbf] lg:hidden">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-[#ffb84d] to-[#ff8f1f]" />
                  ))}
                </div>
                <span className="text-base sm:text-lg">
                  <span className="font-semibold text-white [text-shadow:0_0_12px_rgba(255,184,77,0.25)]">+350</span> alunos ativos
                </span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((s,i)=>(<span key={i} className="text-[#ffb84d]">{s}</span>))}
                <span className="ml-1">4.9 / 5</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="btn-cta h-14 rounded-full px-8 text-base font-bold shadow-[0_0_20px_rgba(57,255,20,0.25),0_14px_34px_-14px_rgba(57,255,20,0.45)] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(57,255,20,0.35),0_18px_40px_-16px_rgba(57,255,20,0.55)]"
              >
                <a href="#metodo">Quero aprender o método agora</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 rounded-full px-8 text-base text-[#f2f2f2] hover:bg-white/5 hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Conhecer o método</a>
              </Button>
            </div>
            <p className="text-sm font-medium text-[#EAEAEA] [text-shadow:0_0_10px_rgba(255,184,77,0.12)]">
              ⚠️ Restam poucas vagas para essa turma
            </p>

            <div className="hidden flex-wrap items-center gap-6 pt-4 text-sm text-[#bfbfbf] lg:flex">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-[#ffb84d] to-[#ff8f1f]" />
                  ))}
                </div>
                <span className="text-base sm:text-lg">
                  <span className="font-semibold text-white [text-shadow:0_0_12px_rgba(255,184,77,0.25)]">+350</span> alunos ativos
                </span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((s,i)=>(<span key={i} className="text-[#ffb84d]">{s}</span>))}
                <span className="ml-1">4.9 / 5</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden animate-scale-in lg:block">
            <div className="absolute -inset-5 bg-[radial-gradient(circle_at_70%_35%,rgba(255,184,77,0.22)_0%,rgba(255,184,77,0)_65%)] blur-3xl opacity-70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,184,77,0.1)]">
              <img
                src={mentor}
                alt="Mentor digital especialista em afiliados"
                className="h-full w-full object-cover grayscale contrast-110 brightness-[0.92]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="mb-2 text-xs uppercase tracking-[0.3em] text-white/90">Por</div>
                <div className="font-serif text-2xl text-[#FFB84D] lg:text-3xl">Kaua Freitas</div>
                <div className="text-sm text-[#bfbfbf]">Mentor • +R$ 2M faturados</div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 top-1/3 animate-float rounded-2xl border border-[#FFB84D]/35 bg-[#0b0b0b]/85 p-4 shadow-[0_0_20px_rgba(255,184,77,0.15)] backdrop-blur sm:-left-10">
              <div className="text-xs uppercase tracking-wider text-[#bfbfbf]">Faturamento</div>
              <div className="font-serif text-2xl text-[#FFB84D] [text-shadow:0_0_12px_rgba(255,184,77,0.35)]">R$ 2.1M+</div>
            </div>
            <div
              className="absolute -right-4 bottom-24 animate-float rounded-2xl border border-[#FFB84D]/35 bg-[#0b0b0b]/85 p-4 shadow-[0_0_20px_rgba(255,184,77,0.15)] backdrop-blur sm:-right-6"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-xs uppercase tracking-wider text-[#bfbfbf]">Alunos</div>
              <div className="font-serif text-[2rem] leading-none text-[#FFB84D] [text-shadow:0_0_12px_rgba(255,184,77,0.35)]">350+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
