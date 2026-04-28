export const Footer = () => (
  <footer className="border-t border-border py-12 mt-12">
    <div className="container space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <div className="font-serif text-2xl text-gradient-gold">Mentoria Digital</div>
          <div className="text-sm text-muted-foreground mt-1">Do zero à liberdade no digital.</div>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
      <div className="gold-divider" />
      <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
        Os resultados apresentados não são garantia de ganhos. O sucesso depende exclusivamente
        do esforço, dedicação e aplicação dos conhecimentos por parte do aluno. Esta página não
        é parte do site Facebook ou Facebook Inc.
      </p>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mentoria Digital. Todos os direitos reservados.</p>
    </div>
  </footer>
);
