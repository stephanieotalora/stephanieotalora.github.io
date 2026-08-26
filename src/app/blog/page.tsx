import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/page";
import { profile } from "@/data/profile";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Blog | ${profile.name}`,
  description:
    "Textos de Stephanie Otálora sobre psicología, escritura y vida interior.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <Page>
      {posts.length === 0 ? (
        <p className="mt-10 text-soft">Pronto habrá textos publicados aquí.</p>
      ) : (
        <ul className="mt-12 space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <p className="text-xs tracking-[0.16em] text-soft uppercase">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-clay"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-soft">{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}
