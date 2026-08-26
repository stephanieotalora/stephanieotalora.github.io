import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-clay text-bone hover:bg-clay-dark",
  outline: "border border-line text-ink hover:border-clay hover:text-clay",
  quiet: "bg-shell text-ink hover:bg-line",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Texto de ayuda cuando el enlace aún no está configurado. */
  pendingLabel?: string;
};

/**
 * Enlace de acción. Resuelve solo si es interno o externo y, cuando el href
 * todavía está vacío (ver TODO en data/profile.ts), lo muestra desactivado.
 */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
  pendingLabel = "Enlace disponible pronto",
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={pendingLabel}
        className={`${classes} cursor-not-allowed opacity-40`}
      >
        {children}
      </span>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
