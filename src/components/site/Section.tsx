import type { ReactNode } from "react";

export function Section({
  id,
  alt,
  children,
  className = "",
}: {
  id?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? "bg-surface-alt" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl text-brand-blue md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base text-muted-foreground md:text-lg ${center ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
