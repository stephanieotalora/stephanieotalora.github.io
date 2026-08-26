/** Foto optimizada. Los datos vienen de `photos` en data/profile.ts. */
export type PhotoData = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

export function Photo({
  photo,
  alt,
  sizes,
  className,
  priority = false,
}: {
  photo: PhotoData;
  alt: string;
  /** Ancho de presentación, para que el navegador elija la versión correcta. */
  sizes: string;
  className?: string;
  /** true para imágenes visibles al cargar la página. */
  priority?: boolean;
}) {
  return (
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      alt={alt}
      width={photo.width}
      height={photo.height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
