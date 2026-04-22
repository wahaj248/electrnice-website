import type { Metadata } from "next";
import { ProductsListingPage } from "@/components/products/ProductsListingPage";
import { listingProductsForCategory } from "@/lib/products-listing";

export const metadata: Metadata = {
  title: "ACs",
  description: "Browse HYUNDAI inverter air conditioners by capacity and features.",
};

export default function ACsPage() {
  const items = listingProductsForCategory("ACs");
  return <ProductsListingPage mode="acs" items={items} />;
}
