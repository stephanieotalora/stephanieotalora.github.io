import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { Page } from "@/components/page";
import { Prose } from "@/components/prose";
import { profile, whatsappUrl } from "@/data/profile";

export const metadata: Metadata = {
  title: `Acompañamiento | ${profile.name}`,
  description:
    "Un espacio para detenerte, escucharte y comprender lo que estás viviendo.",
};

const temas = [
  "Procesos de cambio y transición",
  "Relaciones y vínculos",
  "Autoconocimiento",
  "Toma de decisiones",
  "Situaciones que generan malestar emocional",
  "Comprensión de patrones personales y relacionales",
];

export default function AcompanamientoPage() {
  return (
    <Page title="Un espacio para detenerte, escucharte y comprender lo que estás viviendo">
      <Prose>
        <p>Hay momentos en los que necesitamos algo más que un consejo.</p>
        <p>
          Necesitamos un espacio donde podamos hablar sin prisa, ordenar lo que
          sentimos y mirar aquello que estamos viviendo desde otra perspectiva.
        </p>
        <p>
          Desde mi formación como psicóloga, creo en el valor de la escucha y de
          las preguntas que nos ayudan a comprendernos mejor y encontrar
          nuestras propias respuestas.
        </p>

        <h2>¿En qué puedo acompañarte?</h2>
        <ul>
          {temas.map((tema) => (
            <li key={tema}>{tema}</li>
          ))}
        </ul>
      </Prose>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="font-serif text-xl font-semibold tracking-tight">
          Sesión individual
        </h2>
        <p className="mt-4 leading-relaxed text-soft">
          <span className="text-ink">50–60 minutos</span> · Virtual
        </p>
        <p className="mt-2 leading-relaxed text-soft">
          Las tarifas se adaptan al tipo de acompañamiento que estés buscando.
        </p>
        <ActionLink
          href={whatsappUrl(
            "Hola Stephanie, quiero conocer las opciones de acompañamiento.",
          )}
          className="mt-6"
          pendingLabel="WhatsApp disponible pronto"
        >
          Quiero conocer las opciones
        </ActionLink>
      </section>
    </Page>
  );
}
