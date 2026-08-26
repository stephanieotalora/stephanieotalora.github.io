import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { Page } from "@/components/page";
import { PageBackdrop } from "@/components/page-backdrop";
import { Prose } from "@/components/prose";
import { RoleLine } from "@/components/role-line";
import { photos, profile, whatsappUrl } from "@/data/profile";

export const metadata: Metadata = {
  title: `Sobre mí | ${profile.name}`,
  description:
    "Antes de aprender a acompañar a otros, tuve que aprender a escucharme.",
};

export default function SobreMiPage() {
  return (
    <Page
      title="Antes de aprender a acompañar a otros, tuve que aprender a escucharme."
      backdrop={<PageBackdrop photo={photos.fondoSobreMi} />}
    >
      <Prose>
        <p>
          No siempre fui la persona que hoy se siente cómoda hablando de
          emociones, haciendo preguntas o compartiendo lo que piensa.
        </p>
        <p>
          Durante mucho tiempo fui una persona tímida. Me costaba expresar lo
          que sentía, acercarme a los demás y ocupar mi lugar.
        </p>
        <p>
          Con el tiempo empecé a preguntarme qué había detrás de esas
          dificultades. ¿Por qué nos cuesta tanto decir lo que necesitamos? ¿Por
          qué elegimos determinadas relaciones? ¿Por qué repetimos situaciones
          que sabemos que nos hacen daño?
        </p>
        <p>Esas preguntas terminaron llevándome a la psicología.</p>
        <p>Y, de alguna manera, también me llevaron a mí misma.</p>

        <h2>Hoy...</h2>
        <p>Soy psicóloga y escritora.</p>
        <p>
          A través de la escucha y de preguntas que invitan a mirar más allá de
          lo evidente, acompaño a las personas a comprender mejor su mundo
          interior, reconocer sus necesidades y tomar decisiones más conscientes
          y auténticas.
        </p>
        <p>
          Me interesan especialmente las historias que hay detrás de nuestras
          elecciones, nuestros vínculos y nuestros patrones de comportamiento.
        </p>
        <p>No creo que acompañar a alguien signifique decirle qué debe hacer.</p>
        <p>
          Creo en ofrecer un espacio donde pueda detenerse, mirar lo que está
          viviendo y encontrar sus propias respuestas.
        </p>
      </Prose>

      <blockquote className="mt-12 border-l-2 border-clay pl-6 font-serif text-xl leading-snug tracking-tight text-balance">
        A veces no necesitamos que alguien nos diga qué hacer. Necesitamos un
        espacio que nos permita escucharnos.
      </blockquote>

      <div className="mt-12 border-t border-line pt-10">
        <p className="font-serif text-lg font-semibold tracking-tight">
          {profile.name}
        </p>
        <RoleLine className="mt-2" />
        <ActionLink
          href={whatsappUrl("Hola Stephanie, me gustaría conversar contigo.")}
          className="mt-6"
          pendingLabel="WhatsApp disponible pronto"
        >
          Conversemos →
        </ActionLink>
      </div>
    </Page>
  );
}
