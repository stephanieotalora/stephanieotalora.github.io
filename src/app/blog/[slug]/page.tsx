import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { profile } from "@/data/profile";
import { formatDate, getPostBySlug, getPostSlugs } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: `${post.title} | ${profile.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const slugs = getPostSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-sea transition-colors hover:text-sage"
      >
        ← Blog
      </Link>
      <p className="mt-8 text-sm text-ink/55">{formatDate(post.date)}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <MarkdownContent content={post.content} />
    </main>
  );
}
