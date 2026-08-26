import { profile } from "@/data/profile";

/**
 * Los roles separados por un rombo, en versalitas espaciadas.
 *
 * El espaciado está ajustado para que los tres roles quepan en una sola línea
 * incluso en el móvil más angosto. Cada rombo va junto a su rol y cada rol lleva
 * `whitespace-nowrap`, así que si alguna vez no cabe, corta entre roles y nunca
 * a mitad de "Creadora de contenido".
 */
export function RoleLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.625rem] tracking-[0.06em] text-soft uppercase sm:gap-x-3 sm:text-xs sm:tracking-[0.1em] ${className}`}
    >
      {profile.roles.map((role, index) => (
        <span key={role} className="flex items-center gap-1 whitespace-nowrap sm:gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-[0.55rem] text-clay">
              ◆
            </span>
          ) : null}
          {role}
        </span>
      ))}
    </p>
  );
}
