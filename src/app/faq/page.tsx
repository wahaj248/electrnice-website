import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about HYUNDAI TVs and air conditioners.",
};

export default async function FaqPage() {
  const t = await getTranslations();
  const faqs = [
    { q: t("faqPage.q1"), a: t("faqPage.a1") },
    { q: t("faqPage.q2"), a: t("faqPage.a2") },
    { q: t("faqPage.q3"), a: t("faqPage.a3") },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-[#0056b3] hover:underline"
      >
        {t("faqPage.backHome")}
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#001f3f]">
        {t("faqPage.title")}
      </h1>
      <p className="mt-3 text-zinc-600">
        {t("faqPage.subtitle")}
      </p>
      <ul className="mt-10 space-y-8">
        {faqs.map((item) => (
          <li key={item.q} className="border-b border-zinc-200 pb-8 last:border-0">
            <h2 className="text-lg font-semibold text-zinc-900">{item.q}</h2>
            <p className="mt-2 leading-relaxed text-zinc-600">{item.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
