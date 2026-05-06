import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { BlogPostDef } from "@/lib/blog";
import { blogPosts } from "@/lib/blog";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  return {
    title: t("indexTitle"),
    description: t("indexSubtitle"),
  };
}

export default async function BlogIndexPage() {
  const t = await getTranslations("blog");

  return (
    <div className="bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#001f3f]">{t("indexTitle")}</h1>
        <p className="mt-2 text-zinc-600">{t("indexSubtitle")}</p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} readLabel={t("readArticle")} sectionLabel={t("breadcrumbBlog")} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

async function BlogPostCard({
  post,
  readLabel,
  sectionLabel,
}: {
  post: BlogPostDef;
  readLabel: string;
  sectionLabel: string;
}) {
  const t = await getTranslations(`blogPosts.${post.translationNs}`);
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full bg-zinc-100">
          <Image
            src={post.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">{sectionLabel}</p>
          <h2 className="mt-2 text-lg font-bold leading-snug text-[#001f3f]">{t("heroTitle")}</h2>
          <span className="mt-3 inline-flex text-sm font-semibold text-[#0056b3]">
            {readLabel} →
          </span>
        </div>
      </Link>
    </article>
  );
}
