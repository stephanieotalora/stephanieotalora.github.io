import Link from "next/link";
import { profile } from "@/data/profile";

const buttonClass =
  "block rounded-xl bg-sea px-4 py-3.5 text-center text-sm font-medium text-cream transition-colors hover:bg-sage";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 py-16">
      <img
        src={profile.photo}
        alt={profile.name}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full object-cover ring-2 ring-mist"
      />
      <h1 className="mt-5 text-center text-2xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 text-center text-sm text-ink/80">{profile.title}</p>
      <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-ink/70">
        {profile.tagline}
      </p>

      <ul className="mt-10 w-full space-y-3">
        {profile.links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={buttonClass}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={buttonClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
