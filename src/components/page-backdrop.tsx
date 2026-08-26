import type { PhotoData } from "@/components/photo";

/**
 * Foto de fondo de una página.
 *
 * En pantallas anchas queda fija al viewport y ocupa la columna derecha,
 * disolviéndose hacia la izquierda para dejar la columna de texto sobre fondo
 * limpio. El ancho del panel está topado para que en monitores muy grandes la
 * foto no se estire hasta quedar en una franja irreconocible.
 *
 * En móvil no hay espacio lateral, así que pasa a ser una franja superior que
 * se desvanece hacia abajo. Ahí va en flujo (no fija) para que el texto no
 * termine pasando por encima de la foto al hacer scroll.
 *
 * Es una sola <img> con dos velos (solo uno visible a la vez), para no
 * descargar la foto dos veces.
 */
export function PageBackdrop({ photo }: { photo: PhotoData }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-80 overflow-hidden md:fixed md:inset-0 md:h-auto"
    >
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-3/5 md:max-w-3xl">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 768px) min(60vw, 48rem), 100vw"
          alt=""
          decoding="async"
          className="h-full w-full object-cover object-[50%_12%] md:object-[62%_18%]"
        />

        {/* Móvil: se desvanece hacia abajo. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,247,242,0.6) 0%, rgba(251,247,242,0.9) 55%, var(--color-bone) 100%)",
          }}
        />

        {/* Escritorio: se desvanece hacia la izquierda. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, var(--color-bone) 0%, rgba(251,247,242,0.85) 35%, rgba(251,247,242,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}
