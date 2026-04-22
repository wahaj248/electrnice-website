import type { Metadata } from "next";
import { ProductsListingPage } from "@/components/products/ProductsListingPage";
import { listingProductsForCategory } from "@/lib/products-listing";

export const metadata: Metadata = {
  title: "TVs",
  description: "Browse HYUNDAI smart TVs — filter by size, 4K, and more.",
};

export default function TVsPage() {
  const items = listingProductsForCategory("TVs");
  return <ProductsListingPage mode="tvs" items={items} />;
}
