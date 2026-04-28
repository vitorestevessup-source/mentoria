import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const includes = [
  "Acesso vitalício à mentoria completa",
  "Todos os módulos: Shopee, TikTok Shop, Hotmart e mais",
  "Comunidade VIP no Telegram",
  "Suporte ao vivo semanalmente com a equipe",
  "Atualizações constantes sem custo adicional",
  "Mais de R$ 3.388 em bônus exclusivos",
  "Garantia incondicional de 7 dias",
];

export const Offer = () => (
  <section id="oferta" className="relative py-24 lg:py-36 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,184,77,0.14),transparent_62%)]" />
    </div>

    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Oferta de lançamento</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Comece hoje a construir<br />
            <span className="italic text-gradient-gold">a vida que sempre quis</span>
          </h2>
        </div>

        <div className="relative glass-card rounded-[2rem] p-8 sm:p-12 ring-amber overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

          <div className="relative space-y-8">
            <div className="text-center space-y-3">
              <div className="text-sm text-muted-foreground">De <span className="line-through">R$ 1.997,00</span> por apenas</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-serif text-2xl text-muted-foreground">12x de</span>
                <span className="font-serif text-7xl sm:text-8xl text-gradient-gold leading-none">R$ 49</span>
                <span className="font-serif text-3xl text-gradient-gold">,70</span>
              </div>
              <div className="text-sm text-muted-foreground">ou <span className="text-foreground font-semibold">R$ 497,00</span> à vista</div>
            </div>

            <div className="gold-divider" />

            <ul className="space-y-3.5 max-w-md mx-auto">
              {includes.map((i, k) => (
                <li key={k} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90">{i}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="btn-cta w-full h-16 text-lg font-bold rounded-full">
              <a href="#">Quero garantir minha vaga agora →</a>
            </Button>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground uppercase tracking-wider">
              <span>🔒 Compra 100% Segura</span>
              <span>✓ Garantia 7 dias</span>
              <span>★ Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
