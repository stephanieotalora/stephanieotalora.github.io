import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { Page } from "@/components/page";
import { Photo } from "@/components/photo";
import { Prose } from "@/components/prose";
import { book, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Libros | ${profile.name}`,
  description: `${book.title}, el primer libro de ${profile.name}.`,
};

export default function LibrosPage() {
  return (
    <Page
      title="Escribir también ha sido una forma de comprenderme"
      lead={
        <p>
          En la escritura encontré una manera de transformar mis propias
          vivencias en palabras que puedan acompañar a quienes atraviesan
          experiencias similares.
        </p>
      }
    >
      <Prose>
        <p>
          <strong>{book.title}</strong>, mi primer libro, nace de una historia
          real y de una certeza: incluso el dolor puede convertirse en una
          oportunidad para conocernos, reconstruirnos y aprender a elegirnos.
        </p>
      </Prose>

      <div className="mt-12 border-t border-line pt-10">
        <Photo
          photo={book.cover}
          alt={`Portada de ${book.title}`}
          sizes="224px"
          className="w-56 rounded-xl border border-line object-cover shadow-sm"
        />

        <h2 className="mt-8 font-serif text-xl font-semibold tracking-tight">
          {book.title}
        </h2>
        <p className="mt-4 text-xs tracking-[0.16em] text-clay uppercase">
          Sinopsis
        </p>
        <Prose>
          <p>
            <em>{book.title}</em> nace de una experiencia de desamor, pero no se
            queda en la historia de una relación que no fue. A partir de
            anécdotas, reflexiones y aprendizajes, este libro recorre las
            distintas etapas de soltar a alguien que nunca llegó a ser del todo
            nuestro, pero ocupó un lugar importante en nuestra vida.
          </p>
          <p>
            Olvidar implica más que dejar de pensar en esa persona. También
            supone reconocer las expectativas que construimos, comprender
            aquello que nos dolió, cuestionar lo que esperamos del amor y revisar
            la relación que tenemos con nosotros mismos.
          </p>
          <p>
            Con una voz cercana y reflexiva, estas páginas acompañan ese proceso
            de mirar hacia adentro, aceptar lo que no pudo ser y avanzar hacia
            una forma más consciente de relacionarnos con el amor y con nosotros
            mismos.
          </p>
        </Prose>
        <ActionLink
          href={book.buyUrl}
          className="mt-6"
          pendingLabel="Enlace de compra disponible pronto"
        >
          Comprar el libro →
        </ActionLink>
      </div>
    </Page>
  );
}
