import type { ReactNode } from "react";

/** Estilos de texto largo compartidos por el blog y las páginas de contenido. */
export const proseClass =
  "prose prose-lg max-w-none text-ink prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-p:text-soft prose-a:text-clay prose-a:no-underline hover:prose-a:text-clay-dark prose-strong:text-ink prose-blockquote:border-clay prose-blockquote:font-serif prose-blockquote:text-ink prose-blockquote:not-italic prose-hr:border-line prose-li:text-soft prose-li:marker:text-clay";

export function Prose({ children }: { children: ReactNode }) {
  return <div className={proseClass}>{children}</div>;
}
