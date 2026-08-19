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
    <section className="px-4 pt-2">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-primary text-primary-foreground">
        <div className="hex-field absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative px-6 py-14 sm:px-10 md:py-20">
          <p className="inline-flex items-center rounded-full bg-primary-foreground/12 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.05] md:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              {children}
            </div>
          )}
        </div>
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
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-deep">
          {index}
        </span>
      )}
      <h2 className="mt-4 font-display text-2xl font-bold text-primary-deep md:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{lead}</p>}
    </div>
  );
}
