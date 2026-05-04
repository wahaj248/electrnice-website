import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ProductCard } from "@/components/ProductCard";
import {
  getLocalizedProductDetail,
  resolveLocaleFromCookie,
} from "@/lib/product-detail-locales";
import { products } from "@/lib/products";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse HYUNDAI smart TVs and inverter air conditioners.",
};

export default async function ProductsPage() {
  const t = await getTranslations();
  const cookieStore = await cookies();
  const locale = resolveLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const localizedProducts = products.map((p) => {
    const loc = getLocalizedProductDetail(locale, p);
    return { ...p, name: loc.name, shortDescription: loc.shortDescription };
  });
  return (
    <div className="bg-zinc-50 py-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {t("productsPage.title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          {t("productsPage.desc")}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localizedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
