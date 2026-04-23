"use client";

import { useTranslations } from "next-intl";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function CustomerExperiencesSection() {
  const t = useTranslations();
  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      initials: "RS",
      name: t("testimonials.name1"),
      title: t("testimonials.role1"),
    },
    {
      quote: t("testimonials.quote2"),
      initials: "RR",
      name: t("testimonials.name2"),
      title: t("testimonials.role2"),
    },
    {
      quote: t("testimonials.quote3"),
      initials: "KA",
      name: t("testimonials.name3"),
      title: t("testimonials.role3"),
    },
  ];
  return (
    <section className="bg-[#eef2f6] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
          {t("testimonials.title")}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] sm:p-8"
            >
              <Stars />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-black italic">
                {item.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm font-bold text-black"
                  aria-hidden
                >
                  {item.initials}
                </div>
                <div className="min-w-0 text-left">
                  <p className="truncate font-bold text-black">{item.name}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-black">
                    {item.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
