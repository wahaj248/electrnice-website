import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ProductsListingPage } from "@/components/products/ProductsListingPage";
import {
  getLocalizedProductDetail,
  resolveLocaleFromCookie,
} from "@/lib/product-detail-locales";
import { getProductById } from "@/lib/products";
import { listingProductsForCategory } from "@/lib/products-listing";

export const metadata: Metadata = {
  title: "ACs",
  description: "Browse HYUNDAI inverter air conditioners by capacity and features.",
};

export default async function ACsPage() {
  const items = listingProductsForCategory("ACs");
  const cookieStore = await cookies();
  const locale = resolveLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const localizedItems = items.map((item) => {
    const p = getProductById(item.id);
    if (!p) return item;
    const loc = getLocalizedProductDetail(locale, p);
    return { ...item, name: loc.name, shortDescription: loc.shortDescription };
  });
  return <ProductsListingPage mode="acs" items={localizedItems} />;
}
