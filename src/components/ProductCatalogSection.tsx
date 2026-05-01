"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { getLocalizedProductDetail } from "@/lib/product-detail-locales";
import { catalogProducts } from "@/lib/products";

type Filter = "all" | "TVs" | "ACs";

const navy = "#003399";

export function ProductCatalogSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("home.allProducts") },
    { key: "TVs", label: t("nav.tvs") },
    { key: "ACs", label: t("nav.acs") },
  ];

  const visible = useMemo(() => {
    const base =
      filter === "all"
        ? catalogProducts
        : catalogProducts.filter((p) => p.category === filter);

    // Home cards should show localized name/description like product detail page.
    return base.map((p) => {
      const loc = getLocalizedProductDetail(locale === "es" ? "es" : "en", p);
      return { ...p, name: loc.name, shortDescription: loc.shortDescription };
    });
  }, [filter, locale]);

  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: navy }}
          >
            {t("home.productCatalogTitle")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {filters.map(({ key, label }) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition ${
                    active
                      ? "text-white shadow-sm"
                      : "bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                  style={
                    active
                      ? { backgroundColor: navy, borderColor: navy, color: "#fff" }
                      : { borderColor: "#c7d2e0", color: navy }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p, index) => (
            <CatalogProductCard
              key={p.id}
              product={p}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
