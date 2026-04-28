import about from "@/assets/bala.jpg";
import mae from "@/assets/mae.png";
import sobre from "@/assets/sobre.png";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="sobre" className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden grain">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,rgba(255,184,77,0.12),transparent_62%)]" />

      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-10 lg:mb-20 items-end">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Sobre mim</div>
            <img src={sobre} alt="Sobre mim" className="w-full max-w-xl h-auto" loading="lazy" />
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Eu não nasci pronto.
              <br />
              <span className="italic text-gradient-gold">Eu construí isso.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              Não tive mentor. Não tive dinheiro pra investir. Não tinha ninguém na minha família que entendia de internet.
            </p>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-foreground">Apenas um garoto e um sonho...</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                O próximo pode ser você, basta tomar decisão e se comprometer consigo mesmo...
              </p>
              <p>
                Eu nasci na Restinga, em Porto Alegre. E desde cedo eu entendi como a vida pode ser difícil... Dentro de casa, minha mãe fazia o impossível pra manter tudo de pé, teve época de arroz com ovo, mas nunca faltou esforço e luta.
              </p>
              <p>
                Eu cresci acreditando que o futebol seria a minha saída… até ser dispensado e ver tudo desabar.
              </p>
              <p>
                Sem direção, eu entrei em depressão. Aos 16 anos, fui morar com a minha avó e decidi que minha história não ia terminar daquele jeito. Sem dinheiro e sem estrutura, comecei do jeito que dava: vendendo bala na rua, todos os dias.
              </p>
            </div>
          </div>
        </div>

        {/* Twin photos */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-4 max-w-5xl mx-auto">
          <figure className="space-y-5">
            <img src={about} alt="O começo, em 2018" className="w-full h-auto" loading="lazy" />
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                enquanto eu vendia bala, eu estudava. Com o pouco que eu ganhava, comecei a aprender sobre o digital, errando, testando e insistindo até encontrar uma oportunidade no mercado. Foi ali que fiz meu primeiro dinheiro de verdade — e tudo começou a mudar.
              </p>
              <h3 className="font-serif text-3xl text-foreground">
                Deixei de ser apenas um <span className="text-gradient-gold">''Menino Sonhador''</span>
              </h3>
              <p>
                Hoje, já são mais de 2 milhões gerados no digital, duas empresas e mais de 300 alunos. Mas o mais importante não é isso, é ter mudado a realidade da minha família.
              </p>
            </div>
          </figure>

          <figure className="space-y-4 md:mt-16">
            <img src={mae} alt="Hoje" className="w-full h-auto" loading="lazy" />
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground text-center">De Frustrado e sem perspectiva a Rico através do digital...</h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              O próximo pode ser você, basta tomar decisão e se comprometer consigo mesmo...
            </p>
            <Button
              asChild
              size="lg"
              className="btn-cta h-14 w-full rounded-full px-8 text-base font-bold shadow-[0_0_20px_rgba(57,255,20,0.25),0_14px_34px_-14px_rgba(57,255,20,0.45)] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(57,255,20,0.35),0_18px_40px_-16px_rgba(57,255,20,0.55)]"
            >
              <a href="#oferta">Quero aprender o método agora</a>
            </Button>
          </figure>
        </div>

      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="h-2 bg-[radial-gradient(ellipse_at_top,rgba(255,184,77,0.15),transparent_74%)]" />
      </div>
    </section>
  );
};
