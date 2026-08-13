import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Blog | ${profile.name}`,
  description: "Textos de Stephanie Otálora sobre psicología, escritura y vida interior.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-sea transition-colors hover:text-sage"
      >
        ← Inicio
      </Link>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-ink/70">Escritura sobre la vida interior.</p>

      <ul className="mt-12 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <p className="text-sm text-ink/55">{formatDate(post.date)}</p>
              <h2 className="mt-1 text-xl font-medium tracking-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-sea"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 leading-relaxed text-ink/75">{post.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
