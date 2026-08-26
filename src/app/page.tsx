import Link from "next/link";
import { Photo } from "@/components/photo";
import { RoleLine } from "@/components/role-line";
import { UiIcon } from "@/components/ui-icon";
import { nav, photos, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 py-6">
      <Photo
        photo={photos.retrato}
        alt={profile.name}
        sizes="128px"
        priority
        className="h-32 w-32 rounded-full object-cover ring-1 ring-line"
      />
      <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <RoleLine className="mt-3 justify-center" />
      <p className="mt-5 text-center leading-relaxed text-soft">
        {profile.tagline}
      </p>

      <ul className="mt-10 w-full space-y-3">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-2 transition-colors hover:bg-shell/60"
            >
              <UiIcon name={item.icon} className="h-5 w-5 shrink-0 text-clay" />
              <span className="min-w-0 flex-1 text-base font-medium">
                {item.label}
              </span>
              <span
                aria-hidden="true"
                className="text-clay transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
