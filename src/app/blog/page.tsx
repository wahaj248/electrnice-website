import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import {
  blogPosts,
  getBlogContent,
  resolveBlogLocaleFromCookie,
} from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and articles about Hyundai Smart TVs in the Dominican Republic.",
};

const COPY = {
  es: {
    heading: "Blog",
    subtitle:
      "Guías, comparativas y consejos para elegir tu próximo Smart TV Hyundai.",
  },
  en: {
    heading: "Blog",
    subtitle: "Guides, comparisons and tips for choosing your next Hyundai Smart TV.",
  },
} as const;

export default async function BlogIndexPage() {
  const cookieStore = await cookies();
  const locale = resolveBlogLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const copy = COPY[locale];

  return (
    <div className="bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#001f3f]">{copy.heading}</h1>
        <p className="mt-2 text-zinc-600">{copy.subtitle}</p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const content = getBlogContent(post, locale);
            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] w-full bg-zinc-100">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="line-clamp-2 min-h-[2.75rem] text-lg font-bold leading-snug text-[#001f3f] group-hover:text-[#003399]">
                      {content.title}
                    </h2>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
