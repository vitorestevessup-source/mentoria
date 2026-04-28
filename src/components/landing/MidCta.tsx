import mentor from "@/assets/im2.jpg";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/links";

export const MidCta = () => {
  return (
    <section className="relative pt-2 pb-10 lg:pt-4 overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-sm space-y-8">
          <div className="relative mx-auto animate-scale-in">
            <div className="absolute -inset-5 bg-[radial-gradient(circle_at_70%_35%,rgba(255,184,77,0.22)_0%,rgba(255,184,77,0)_65%)] blur-3xl opacity-70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,184,77,0.1)]">
              <img
                src={mentor}
                alt="Mentor digital especialista em afiliados"
                className="h-full w-full object-cover grayscale contrast-110 brightness-[0.92]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-center">
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

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#bfbfbf]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-[#ffb84d] to-[#ff8f1f]" />
                ))}
              </div>
              <span className="text-base sm:text-lg">
                <span className="font-semibold text-white [text-shadow:0_0_12px_rgba(255,184,77,0.25)]">+350</span> alunos ativos
              </span>
            </div>
            <div className="flex items-center gap-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-[#ffb84d]">{s}</span>
              ))}
              <span className="ml-1">4.9 / 5</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="btn-cta h-14 w-full rounded-full px-8 text-base font-bold shadow-[0_0_20px_rgba(57,255,20,0.25),0_14px_34px_-14px_rgba(57,255,20,0.45)] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(57,255,20,0.35),0_18px_40px_-16px_rgba(57,255,20,0.55)]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Quero aprender o método agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
