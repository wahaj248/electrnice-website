"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FaqBannerImage from "../../public/card/faq.png";

const BANNER_IMG =
  "https://images.unsplash.com/photo-1585338447937-da59a09d97b7?w=1600&q=85";

export function FaqBannerSection() {
  const t = useTranslations();
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border-2 border-sky-200 shadow-sm sm:rounded-3xl">
          <div className="relative min-h-[280px] sm:min-h-[300px] lg:min-h-[340px]">
            <Image
              src={FaqBannerImage}
              alt=""
              fill
              className="object-cover object-fill"
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#0a1f3d]/95 to-[#1e3a5f]/20 sm:via-[#0a1f3d]/88 sm:to-transparent"
              aria-hidden
            />
            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-center px-6 py-10 sm:min-h-[300px] sm:px-10 lg:min-h-[340px] lg:max-w-[55%] lg:px-12">
              <h2 className="text-left text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-snug">
                {t("home.faqBannerTitle")}
              </h2>
              <div className="mt-8">
                <Link
                  href="/faq"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#0a1628] shadow-md transition hover:bg-zinc-100 sm:px-8"
                >
                  {t("home.readFaqs")}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
