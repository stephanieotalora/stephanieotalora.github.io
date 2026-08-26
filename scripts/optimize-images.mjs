/**
 * Optimiza las fotos de src/assets/ para la web y las escribe en public/img/.
 *
 * Los originales (4000x6000, ~25 MB) no se publican: solo las versiones WebP
 * que usan las páginas. Cada foto se genera en dos anchos para el srcset,
 * de modo que las pantallas normales descarguen la versión pequeña.
 *
 * Uso: npm run images
 */
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "src/assets";
const OUTPUT_DIR = "public/img";
const QUALITY = 80; // por defecto

/**
 * square: recorte cuadrado en fracciones del original, para que no dependa de
 *   la resolución de la foto fuente. focusX/focusY es el punto que queda al
 *   centro (el rostro) y size es el lado como fracción del ancho.
 * widths: anchos a generar; el primero es el que se sirve por defecto.
 * quality: calidad WebP. Más baja para las imágenes que van detrás de un velo.
 */
const jobs = [
  {
    src: "pagina-principal.jpg",
    name: "retrato",
    // Cuadrado centrado en el rostro, para el avatar circular del inicio.
    square: { focusX: 0.514, focusY: 0.318, size: 0.7 },
    widths: [256, 512],
  },
  {
    src: "sobre-mi.jpg",
    name: "sobre-mi-fondo",
    // Fondo de /sobre-mi. Va detrás de un velo crema, así que admite más
    // compresión sin que se note.
    widths: [800, 1600],
    quality: 68,
  },
];

/** Traduce un `square` en fracciones a la región en píxeles de esta fuente. */
function squareRegion({ focusX, focusY, size }, width, height) {
  const side = Math.round(size * width);
  const clamp = (value, max) => Math.max(0, Math.min(Math.round(value), max - side));
  return {
    left: clamp(focusX * width - side / 2, width),
    top: clamp(focusY * height - side / 2, height),
    width: side,
    height: side,
  };
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} kB`;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const known = new Set(jobs.map((job) => job.src));
  const present = (await readdir(SOURCE_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  for (const file of present) {
    if (!known.has(file)) {
      console.warn(`aviso: ${file} está en ${SOURCE_DIR} pero no tiene job en este script`);
    }
  }

  for (const job of jobs) {
    const input = path.join(SOURCE_DIR, job.src);
    const original = await stat(input);
    const meta = await sharp(input).metadata();
    console.log(`\n${job.src}  ${meta.width}x${meta.height}  ${kb(original.size)}`);

    const region = job.square
      ? squareRegion(job.square, meta.width, meta.height)
      : null;

    for (const width of job.widths) {
      let image = sharp(input).rotate();
      if (region) {
        image = image.extract(region);
      }

      const buffer = await image
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: job.quality ?? QUALITY, effort: 6 })
        .toBuffer();

      const outPath = path.join(OUTPUT_DIR, `${job.name}-${width}.webp`);
      await writeFile(outPath, buffer);
      console.log(`  → ${outPath}  ${kb(buffer.length)}`);
    }
  }
}

await main();
