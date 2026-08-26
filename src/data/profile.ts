import type { PhotoData } from "@/components/photo";

/**
 * Datos y enlaces del sitio.
 *
 * TODO: los campos vacíos son marcadores. Mientras estén vacíos, el botón o la
 * tarjeta correspondiente se muestra desactivada en la web.
 */

export const profile = {
  name: "Stephanie Otálora",
  /** Se muestran separados por un rombo; ver components/role-line.tsx. */
  roles: ["Psicóloga", "Escritora", "Creadora de contenido"],
  tagline:
    "Creo en las conversaciones que nos ayudan a comprender lo que sentimos, darle sentido a lo que vivimos y encontrar nuevas formas de avanzar",
};

/** Versión en una línea, para los títulos de página y las descripciones. */
export const roleLine = profile.roles.join(" · ");

/** Fotos generadas por `npm run images` a partir de src/assets/. */
export const photos: Record<"retrato" | "fondoSobreMi", PhotoData> = {
  retrato: {
    src: "/img/retrato-256.webp",
    srcSet: "/img/retrato-256.webp 256w, /img/retrato-512.webp 512w",
    width: 256,
    height: 256,
  },
  fondoSobreMi: {
    src: "/img/sobre-mi-fondo-800.webp",
    srcSet:
      "/img/sobre-mi-fondo-800.webp 800w, /img/sobre-mi-fondo-1600.webp 1600w",
    width: 800,
    height: 1200,
  },
};

/** Número de WhatsApp con indicativo de país y solo dígitos, ej. "573001234567". */
export const whatsappNumber = "573014502500";

/** Correo de contacto. Déjalo vacío si no quieres mostrarlo. */
export const email = ""; // TODO

export function whatsappUrl(message?: string): string {
  if (!whatsappNumber) return "";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsappNumber}${query}`;
}

/** Formas de escribirme y seguirme. WhatsApp va primero por ser el canal directo. */
export const channels = [
  {
    label: "WhatsApp",
    icon: "whatsapp",
    detail: "Escríbeme directamente",
    href: whatsappUrl("Hola Stephanie, me gustaría conversar contigo."),
  },
  {
    label: "Instagram",
    icon: "instagram",
    detail: "@stephanie.otalora",
    href: "https://www.instagram.com/stephanie.otalora/",
  },
  {
    label: "TikTok",
    icon: "tiktok",
    detail: "@stephanie.otalora",
    href: "https://www.tiktok.com/@stephanie.otalora",
  },
  {
    label: "Facebook",
    icon: "facebook",
    detail: "Stephanie Otálora",
    href: "https://www.facebook.com/Stephanieotalora",
  },
  {
    label: "Substack",
    icon: "substack",
    detail: "@stephanieotalora",
    href: "https://substack.com/@stephanieotalora",
  },
] as const;

export const podcast = {
  name: "Encontrando un sentido",
  description:
    "Conversaciones sobre lo que sentimos, lo que nos cuesta nombrar y las preguntas que nos ayudan a seguir.",
  youtube:
    "https://www.youtube.com/playlist?list=PLOwUS6cGGkYj71PaXYE1l6cB8gV_yUczf",
  spotify: "https://open.spotify.com/show/0Xw3DscVcyNyma4WlGLNuY",
};

export const book = {
  title: "Olvidando a mi casi algo",
  cover: "", // TODO: sube la portada a /public y pon aquí "/portada-olvidando-a-mi-casi-algo.jpg"
  buyUrl: "", // TODO
};

/** Navegación de la portada. */
export const nav = [
  {
    label: "Sobre mí",
    detail: "Mi historia y mi forma de acompañar",
    href: "/sobre-mi",
    icon: "user",
  },
  {
    label: "Acompañamiento",
    detail: "Sesiones individuales, virtuales",
    href: "/acompanamiento",
    icon: "heart",
  },
  {
    label: "Blog",
    detail: "Escritura sobre la vida interior",
    href: "/blog",
    icon: "feather",
  },
  {
    label: "Libros",
    detail: book.title,
    href: "/libros",
    icon: "book",
  },
  {
    label: "Podcast",
    detail: podcast.name,
    href: "/podcast",
    icon: "mic",
  },
  {
    label: "Redes y contacto",
    detail: "WhatsApp, Instagram, TikTok y más",
    href: "/contacto",
    icon: "at",
  },
] as const;
