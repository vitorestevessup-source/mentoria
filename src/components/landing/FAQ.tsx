import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Eu não tenho nenhuma experiência. Consigo aprender?", a: "Sim. A mentoria foi desenhada exatamente para quem está começando do absoluto zero. Você é guiado passo a passo, do básico ao avançado, sem precisar de conhecimento prévio." },
  { q: "Por quanto tempo eu tenho acesso?", a: "O acesso é vitalício. Você paga uma vez e tem acesso a todas as aulas, atualizações e bônus para sempre." },
  { q: "Preciso investir dinheiro além da mentoria?", a: "Não. Mostramos canais e estratégias que permitem você começar sem investir nada em tráfego pago no início, usando os marketplaces como base." },
  { q: "Quanto tempo até o primeiro resultado?", a: "Varia de aluno para aluno, mas a média dos que aplicam o método consistentemente é de 30 a 90 dias para a primeira venda." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não for pra você, devolvemos 100% do seu dinheiro, sem perguntas." },
  { q: "Como funciona o suporte?", a: "Lives semanais ao vivo, grupo VIP no Telegram com a equipe ativa todos os dias e tutoria direta nos momentos que você mais precisa." },
];

export const FAQ = () => (
  <section className="py-24 lg:py-32">
    <div className="container max-w-3xl">
      <div className="text-center mb-12 space-y-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary">Perguntas frequentes</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Tire suas <span className="italic text-gradient-gold">dúvidas</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="glass-card rounded-2xl px-6 border-0 data-[state=open]:ring-amber transition-all"
          >
            <AccordionTrigger className="font-serif text-lg text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
