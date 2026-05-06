"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { FloatingSelectionBar } from "@/components/FloatingSelectionBar";
import HeroSliderImage from "../../public/heroslider/img1.png";

type SlideText = {
  title: string;
  subtitle: string;
  col1: string[];
  col2: string[];
};

type Slide = SlideText & {
  image: string | typeof HeroSliderImage;
  ctaHref: string;
};

const SLIDE_META: Pick<Slide, "image" | "ctaHref">[] = [
  {
    image: HeroSliderImage,
    ctaHref: "/products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1600&q=80",
    ctaHref: "/acs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=1600&q=80",
    ctaHref: "/tvs",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HeroSlider() {
  const t = useTranslations();
  const messages = useMessages();
  const locale = useLocale();

  const slides = useMemo((): Slide[] => {
    const hero = messages.heroSlider as { slides?: SlideText[] };
    const slideTexts = hero?.slides;
    if (!slideTexts?.length) {
      return SLIDE_META.map((meta) => ({
        title: "",
        subtitle: "",
        col1: [],
        col2: [],
        ...meta,
      }));
    }
    return slideTexts.map((text, i) => ({
      ...text,
      ...SLIDE_META[i],
    }));
  }, [messages, locale]);

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const timer = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(timer);
  }, [go]);

  useEffect(() => {
    setIndex((i) => (i >= total ? 0 : i));
  }, [total]);

  const slide = slides[index] ?? slides[0];

  return (
    <section className="relative z-40 isolate min-h-[480px] w-full bg-[#0a1628] sm:min-h-[min(100vh,640px)]">
      {/* Overflow only on the image stack — no section scroll; floating bar stays uncropped */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={`${locale}-${s.title}-${i}`}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover object-[center_22%] sm:object-[center_30%] sm:object-right"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Mobile: stronger bottom + left readability; desktop: left-to-right sweep */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-black/40 to-black/80 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/45 sm:to-transparent"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto flex min-h-[480px] max-w-6xl flex-col justify-start gap-8 px-4 pb-40 pt-14 sm:min-h-[min(100vh,640px)] sm:justify-center sm:gap-0 sm:px-6 sm:pb-32 sm:pt-16 lg:px-6 lg:pb-36 lg:pt-20">
        <div className="max-w-xl">
          <h1 className="text-balance break-words text-xl font-bold uppercase leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl">
            {slide.title}
          </h1>
          <p className="mt-3 text-sm font-normal leading-relaxed text-white/90 sm:mt-4 sm:text-base">
            {slide.subtitle}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 sm:mt-8 sm:grid-cols-2">
            <ul className="space-y-2 text-sm leading-snug text-white/95">
              {slide.col1.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm leading-snug text-white/95">
              {slide.col2.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 sm:mt-10">
            <Link
              href={slide.ctaHref}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#003399] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00287a] sm:w-auto sm:px-8"
            >
              {t("heroSlider.learnMore")}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-xl items-center justify-between gap-3 sm:absolute sm:bottom-10 sm:right-6 sm:mt-0 sm:w-auto sm:max-w-none sm:justify-end lg:right-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-white transition hover:bg-white/10"
            aria-label={t("heroSlider.prev")}
          >
            <span className="text-lg leading-none">‹</span>
          </button>
          <div className="flex items-center gap-2 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? "h-2 w-2 rounded-full bg-white"
                    : "h-2 w-2 rounded-full bg-white/40 transition hover:bg-white/70"
                }
                aria-label={t("heroSlider.goToSlide", { number: i + 1 })}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-white transition hover:bg-white/10"
            aria-label={t("heroSlider.next")}
          >
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>

      <FloatingSelectionBar />
    </section>
  );
}
