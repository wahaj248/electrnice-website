import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { CtaReadySection } from "@/components/CtaReadySection";
import type { BlogBlock } from "@/lib/blog-content";
import {
  blogPosts,
  getBlogContent,
  getBlogPostBySlug,
  resolveBlogLocaleFromCookie,
} from "@/lib/blog-content";

type Props = { params: Promise<{ slug: string }> };

const LABELS = {
  es: { home: "Inicio", blog: "Blog", toc: "Tabla de contenidos" },
  en: { home: "Home", blog: "Blog", toc: "Table of contents" },
} as const;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog" };
  const cookieStore = await cookies();
  const locale = resolveBlogLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const content = getBlogContent(post, locale);
  return {
    title: content.title,
    description: content.excerpt,
  };
}

function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="leading-relaxed text-zinc-700">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-2 text-lg font-semibold text-zinc-900">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-700">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="list-decimal space-y-2 pl-5 leading-relaxed text-zinc-700">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={index} className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl border border-zinc-200 text-sm">
            <thead className="bg-zinc-100 text-left text-zinc-900">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-t border-zinc-200 px-4 py-3 text-zinc-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-[#003399] bg-zinc-50 px-5 py-4 italic text-zinc-700"
        >
          {block.text}
        </blockquote>
      );
    case "cta":
      return (
        <Link
          key={index}
          href={block.href}
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#003399] px-6 text-sm font-semibold text-white transition hover:bg-[#00287a]"
        >
          {block.label}
        </Link>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const cookieStore = await cookies();
  const locale = resolveBlogLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const content = getBlogContent(post, locale);
  const labels = LABELS[locale];

  return (
    <div className="bg-white">
      <nav
        className="mx-auto max-w-6xl px-4 pt-8 text-sm text-zinc-600 sm:px-6"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="font-medium text-zinc-500 transition hover:text-[#003399]">
              {labels.home}
            </Link>
          </li>
          <li aria-hidden className="text-zinc-400">/</li>
          <li>
            <Link href="/blog" className="font-medium text-zinc-500 transition hover:text-[#003399]">
              {labels.blog}
            </Link>
          </li>
        </ol>
      </nav>

      <header className="relative mx-auto mt-6 max-w-[1160px] px-4 sm:px-6">
        <div className="relative aspect-[1160/550] max-h-[min(55vh,550px)] min-h-[280px] w-full overflow-hidden rounded-2xl bg-zinc-900 sm:min-h-[380px]">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1160px) 100vw, 1160px"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
              {content.category}
            </p>
            <h1 className="mt-2 max-w-4xl text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[28px] lg:leading-[1.15]">
              {content.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(200px,260px)_1fr] lg:gap-14 xl:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-900">
              {labels.toc}
            </p>
            <nav
              className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 shadow-sm"
              aria-label={labels.toc}
            >
              <ul className="space-y-0.5 text-sm">
                {content.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-2 text-zinc-600 transition hover:bg-white hover:text-[#003399]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 text-zinc-800 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28">
            {content.sections.map((section, sIdx) => (
              <section
                key={section.id}
                id={section.id}
                className={[
                  "space-y-4",
                  sIdx === 0 ? "" : "mt-12",
                ].join(" ")}
              >
                {section.heading ? (
                  <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">
                    {section.heading}
                  </h2>
                ) : null}
                {section.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
              </section>
            ))}
          </article>
        </div>
      </div>

      <CtaReadySection />
    </div>
  );
}
