import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Contenedor de las páginas internas: enlace de regreso, título y contenido.
 *
 * Con `backdrop` la página se ensancha y el texto se alinea a la izquierda,
 * para dejarle sitio a la foto de fondo en pantallas anchas.
 */
export function Page({
  title,
  eyebrow,
  lead,
  children,
  backHref = "/",
  backLabel = "Inicio",
  backdrop,
}: {
  title: string;
  eyebrow?: string;
  lead?: ReactNode;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
  backdrop?: ReactNode;
}) {
  const content = (
    <>
      <Link
        href={backHref}
        className="text-sm text-soft transition-colors hover:text-clay"
      >
        ← {backLabel}
      </Link>

      {eyebrow ? (
        <p className="mt-10 text-xs tracking-[0.16em] text-soft uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h1
        className={`font-serif text-3xl leading-tight font-semibold tracking-tight text-balance ${eyebrow ? "mt-3" : "mt-10"}`}
      >
        {title}
      </h1>
      {lead ? (
        <div className="mt-5 text-lg leading-relaxed text-soft">{lead}</div>
      ) : null}

      {children}
    </>
  );

  if (!backdrop) {
    return (
      <main className="mx-auto w-full max-w-2xl px-6 py-16">{content}</main>
    );
  }

  return (
    <div className="relative">
      {backdrop}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16">
        <div className="max-w-2xl">{content}</div>
      </main>
    </div>
  );
}
