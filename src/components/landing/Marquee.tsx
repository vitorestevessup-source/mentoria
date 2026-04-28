export const Marquee = ({ items }: { items: string[] }) => {
  const row = (
    <div className="marquee__inner">
      {items.concat(items).map((t, i) => (
        <span key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/90 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <div className="border-y border-primary/15 bg-card/40 py-4">
      <div className="marquee">{row}{row}</div>
    </div>
  );
};
