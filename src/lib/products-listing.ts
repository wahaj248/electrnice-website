import type { Product } from "@/lib/products";
import { products, resolveImageSrc } from "@/lib/products";

export type ListingProduct = {
  id: string;
  name: string;
  shortDescription: string;
  imageSrc: string;
  price: number;
  tags: string[];
};

const TV_CHIP_ORDER = [
  "4K",
  "32 inches",
  "HD",
  "43 inches",
  "50 inches",
  "55 inches",
  "65 inches",
  "Full HD",
  "Android TV",
  "Wi-Fi",
] as const;

const AC_CHIP_ORDER = [
  "Inverter",
  "On-Off",
  "1 Ton",
  "1.5 Ton",
  "2 Ton",
  "Cold/Hot",
  "Wi-Fi",
] as const;

function listingTagsForProduct(p: Product): string[] {
  const tags: string[] = [];
  const n = p.name;

  if (p.category === "TVs") {
    if (n.includes("4K")) tags.push("4K");
    if (n.includes('32"')) tags.push("32 inches", "HD");
    if (n.includes('43"')) tags.push("43 inches", "Full HD");
    if (n.includes('50"')) tags.push("50 inches", "4K");
    if (n.includes('55"')) tags.push("55 inches", "4K");
    if (n.includes('65"')) tags.push("65 inches", "4K");
    tags.push("Android TV", "Wi-Fi");
  } else {
    if (n.includes("On-Off")) tags.push("On-Off");
    else tags.push("Inverter");
    tags.push("Cold/Hot");
    if (n.includes("1 Ton") && !n.includes("1.5")) tags.push("1 Ton");
    if (n.includes("1.5 Ton")) tags.push("1.5 Ton");
    if (n.includes("2 Ton")) tags.push("2 Ton");
    tags.push("Wi-Fi");
  }

  return [...new Set(tags)];
}

export function toListingProduct(p: Product): ListingProduct {
  return {
    id: p.id,
    name: p.name,
    shortDescription: p.shortDescription,
    imageSrc: resolveImageSrc(p.image),
    price: p.price,
    tags: listingTagsForProduct(p),
  };
}

export function listingProductsForCategory(category: "TVs" | "ACs"): ListingProduct[] {
  return products.filter((p) => p.category === category).map(toListingProduct);
}

export function filterChipLabelsForCategory(category: "TVs" | "ACs"): string[] {
  const items = listingProductsForCategory(category);
  const present = new Set(items.flatMap((i) => i.tags));
  const order = category === "TVs" ? TV_CHIP_ORDER : AC_CHIP_ORDER;
  return order.filter((label) => present.has(label));
}
