import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "About",
  description: "HYUNDAI Electronics — engineered for excellence.",
};

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {t("aboutPage.title")}
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {t("aboutPage.body")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-semibold text-[#003399] hover:underline"
      >
        {t("aboutPage.backHome")}
      </Link>
    </div>
  );
}
