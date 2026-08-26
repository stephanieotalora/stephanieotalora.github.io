import type { Metadata } from "next";
import { BrandIcon } from "@/components/brand-icon";
import { Page } from "@/components/page";
import { channels, email, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Redes y contacto | ${profile.name}`,
  description: "Escríbeme por WhatsApp o sígueme en redes sociales.",
};

export default function ContactoPage() {
  return (
    <Page
      title="Conversemos"
      lead={
        <p>
          Si algo de lo que leíste aquí resonó contigo, escríbeme. Aquí también
          comparto reflexiones y conversaciones en el día a día.
        </p>
      }
    >
      <ul className="mt-10 space-y-3">
        {channels.map((channel) => {
          const content = (
            <>
              <BrandIcon name={channel.icon} className="h-5 w-5 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ink">
                  {channel.label}
                </span>
                <span className="block truncate text-sm text-soft">
                  {channel.detail}
                </span>
              </span>
            </>
          );

          const shell =
            "flex items-center gap-4 rounded-xl border border-line px-5 py-4 text-clay";

          return (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${shell} transition-colors hover:border-clay hover:bg-shell/60`}
                >
                  {content}
                </a>
              ) : (
                /* TODO: falta el enlace en data/profile.ts */
                <span
                  aria-disabled="true"
                  title="Enlace disponible pronto"
                  className={`${shell} cursor-not-allowed opacity-40`}
                >
                  {content}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {email ? (
        <p className="mt-8 text-sm text-soft">
          También puedes escribirme a{" "}
          <a
            href={`mailto:${email}`}
            className="text-clay transition-colors hover:text-clay-dark"
          >
            {email}
          </a>
          .
        </p>
      ) : null}
    </Page>
  );
}
