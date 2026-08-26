import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { Page } from "@/components/page";
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
    <Page
      backHref="/blog"
      backLabel="Blog"
      eyebrow={formatDate(post.date)}
      title={post.title}
    >
      <MarkdownContent content={post.content} />
    </Page>
  );
}
