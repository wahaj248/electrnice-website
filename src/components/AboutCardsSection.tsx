"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import AboutCardsImage from "../../public/card/img1.png";
import AboutCardsImage2 from "../../public/card/img2.png";
import AboutCardsImage3 from "../../public/card/image.jpg";

type PopupId = "company" | "products" | "catalog";

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function AboutCard({
  image,
  alt,
  title,
  learnMoreLabel,
  onLearnMore,
  href,
}: {
  image: typeof AboutCardsImage;
  alt: string;
  title: string;
  learnMoreLabel: string;
  onLearnMore?: () => void;
  href?: string;
}) {
  const content = (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />
      <div className="relative z-10 mt-auto flex flex-col items-center px-6 pb-10 text-center">
        <h3 className="text-xl font-semibold text-white drop-shadow-sm sm:text-2xl">{title}</h3>
        {onLearnMore ? (
          <button
            type="button"
            onClick={onLearnMore}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {learnMoreLabel}
          </button>
        ) : (
          <span className="mt-6 inline-flex h-11 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold text-white transition group-hover:bg-white/10">
            {learnMoreLabel}
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003399] focus-visible:ring-offset-2 sm:min-h-[440px]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}

export function AboutCardsSection() {
  const t = useTranslations();
  const [popup, setPopup] = useState<PopupId | null>(null);

  const closePopup = useCallback(() => setPopup(null), []);

  useEffect(() => {
    if (!popup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [popup, closePopup]);

  const popupTitle =
    popup === "company"
      ? t("aboutCards.card1Title")
      : popup === "products"
        ? t("aboutCards.card2Title")
        : t("aboutCards.card3Title");
  const popupBody =
    popup === "company"
      ? t("aboutCards.card1Body")
      : popup === "products"
        ? t("aboutCards.card2Body")
        : t("aboutCards.card3Body");

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <AboutCard
            image={AboutCardsImage}
            alt="Modern office building at dusk"
            title={t("aboutCards.card1Title")}
            learnMoreLabel={t("aboutCards.learnMore")}
            onLearnMore={() => setPopup("company")}
          />
          <AboutCard
            image={AboutCardsImage2}
            alt="HYUNDAI smart TV and home electronics"
            title={t("aboutCards.card2Title")}
            learnMoreLabel={t("aboutCards.learnMore")}
            onLearnMore={() => setPopup("products")}
          />
          <AboutCard
            image={AboutCardsImage3}
            alt="Product catalogs and brochures"
            title={t("aboutCards.card3Title")}
            learnMoreLabel={t("aboutCards.learnMore")}
            onLearnMore={() => setPopup("catalog")}
          />
        </div>
      </section>

      {popup ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={closePopup}
            aria-label={t("aboutCards.close")}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-popup-title"
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="about-popup-title" className="text-xl font-bold text-[#001f3f] sm:text-2xl">
                {popupTitle}
              </h2>
              <button
                type="button"
                onClick={closePopup}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200 hover:text-zinc-900"
                aria-label={t("aboutCards.close")}
              >
                <CloseIcon />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{popupBody}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {popup === "catalog" ? (
                <Link
                  href="/products"
                  onClick={closePopup}
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#003399] px-6 text-sm font-semibold text-white transition hover:bg-[#00287a] sm:min-w-[140px]"
                >
                  {t("aboutCards.viewCatalog")}
                </Link>
              ) : null}
              <button
                type="button"
                onClick={closePopup}
                className={[
                  "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition sm:min-w-[140px]",
                  popup === "catalog"
                    ? "flex-1 border-2 border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                    : "w-full bg-[#003399] text-white hover:bg-[#00287a] sm:w-auto",
                ].join(" ")}
              >
                {t("aboutCards.close")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
