"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-16 sm:px-6">
      <div className="w-full rounded-3xl border border-zinc-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {t("notFound.title")}
        </h1>

        <p dir="rtl" className="mt-3 text-lg font-semibold text-zinc-800">
          الصفحة غير موجودة
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600">
          {t("notFound.desc")}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#003399] px-7 text-sm font-semibold text-white transition hover:bg-[#00287a]"
          >
            {t("notFound.goHome")}
          </Link>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-7 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            {t("notFound.browseProducts")}
          </Link>
        </div>
      </div>
    </div>
  );
}

