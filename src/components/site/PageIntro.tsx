import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  lead,
}: {
  index?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      {index && (
        <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
          {index}
        </span>
      )}
      <h2 className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">{title}</h2>
      {lead && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}
