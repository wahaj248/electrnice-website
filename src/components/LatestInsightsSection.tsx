"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { guidePosts } from "@/lib/guides";


const headingNavy = "#001f3f";
const textGray = "#666666";
const linkBlue = "#0056b3";

export function LatestInsightsSection() {
  const t = useTranslations();
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: headingNavy }}
        >
          {t("insights.title")}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {guidePosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-[18px] bg-[#f8f9fa] shadow-sm ring-1 ring-black/[0.04]"
            >
              <div className="relative aspect-[16/16] w-full overflow-hidden rounded-t-[18px]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-fill"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
        
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: textGray }}
                >
                  {t(`guides.${post.slug}.category`)}
                </p>
                <h3
                  className="mt-2 text-lg font-bold leading-snug sm:text-xl"
                  style={{ color: headingNavy }}
                >
                  {t(`guides.${post.slug}.title`)}
                </h3>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed sm:text-[15px]"
                  style={{ color: textGray }}
                >
                  {t(`guides.${post.slug}.description`)}
                </p>
                <Link
                  href={`/guides/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition hover:underline"
                  style={{ color: linkBlue }}
                >
                  {t("insights.readMore")}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
