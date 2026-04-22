"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import heroCatalogBg from "../../../public/card/faq.png";
import heroRightArt from "../../../public/card/right.png";
import { FloatingSelectionBar } from "@/components/FloatingSelectionBar";
import { CtaReadySection } from "@/components/CtaReadySection";
import type { ListingProduct } from "@/lib/products-listing";
import { filterChipLabelsForCategory } from "@/lib/products-listing";
import { ListingProductCard } from "./ListingProductCard";

type Mode = "tvs" | "acs";

const navy = "#003399";

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

function CategoryRow({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-semibold transition",
        active ? "bg-zinc-100 text-zinc-900 ring-1 ring-zinc-200" : "text-zinc-700 hover:bg-zinc-50",
      )}
    >
      <span
        className={cn(
          "flex h-3 w-3 shrink-0 rounded-full border-2",
          active ? "border-[#003399] bg-[#003399]" : "border-zinc-300 bg-white",
        )}
        aria-hidden
      />
      {label}
    </Link>
  );
}

export function ProductsListingPage({
  mode,
  items,
}: {
  mode: Mode;
  items: ListingProduct[];
}) {
  const category: "TVs" | "ACs" = mode === "tvs" ? "TVs" : "ACs";
  const chipLabels = useMemo(() => filterChipLabelsForCategory(category), [category]);
  const [selectedChips, setSelectedChips] = useState<Set<string>>(() => new Set());
  const [sort, setSort] = useState<"newer" | "price-asc" | "price-desc">("newer");
  const [search, setSearch] = useState("");

  const orderIndex = useMemo(() => new Map(items.map((it, idx) => [it.id, idx])), [items]);

  const filteredSorted = useMemo(() => {
    const q = search.trim().toLowerCase();
    let out = items.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q) && !p.shortDescription.toLowerCase().includes(q)) {
        return false;
      }
      if (selectedChips.size === 0) return true;
      return [...selectedChips].every((tag) => p.tags.includes(tag));
    });

    if (sort === "newer") {
      out = [...out].sort((a, b) => (orderIndex.get(a.id) ?? 0) - (orderIndex.get(b.id) ?? 0));
    } else if (sort === "price-asc") {
      out = [...out].sort((a, b) => a.price - b.price);
    } else {
      out = [...out].sort((a, b) => b.price - a.price);
    }
    return out;
  }, [items, orderIndex, search, selectedChips, sort]);

  function toggleChip(label: string) {
    setSelectedChips((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  return (
    <div className="relative pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:pt-8">
        <nav className="text-sm text-zinc-600" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="font-medium text-zinc-800 hover:text-[#003399]">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-zinc-400">
              /
            </li>
            <li className="font-medium text-zinc-500">Products</li>
          </ol>
        </nav>

        <section
          className="relative mt-6 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
          aria-labelledby="catalog-hero-heading"
        >
          <div className="relative w-full min-h-0 md:h-[292px] md:min-h-[292px]">
            <Image
              src={heroCatalogBg}
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#001f3f]/70 to-[#001f3f]/25 sm:via-[#001f3f]/55 sm:to-transparent"
              aria-hidden
            />
            <div className="relative z-10 grid grid-cols-1 items-center gap-6 px-6 py-8 sm:px-10 sm:py-10 md:h-[292px] md:min-h-[292px] md:grid-cols-[minmax(0,1fr)_371px] md:items-center md:gap-4 md:py-6 lg:py-8">
              <div className="flex flex-col justify-center text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/85">
                  That Power Your Life
                </p>
                <h1
                  id="catalog-hero-heading"
                  className="mt-2 text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-[2.35rem]"
                >
                  Technological experiences
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {mode === "tvs"
                    ? "Browse smart LED televisions with vivid picture, streaming apps, and sizes for every room."
                    : "Browse inverter split air conditioners engineered for efficient cooling and quieter comfort."}
                </p>
              </div>
              <div className="relative mx-auto hidden h-[292px] w-full max-w-[371px] overflow-hidden md:mx-0 md:block md:w-[371px] md:max-w-[371px] md:shrink-0">
                <div className="absolute inset-x-0 bottom-0 h-[330px] w-full max-w-[371px] md:left-0 md:right-auto md:w-[371px]">
                  <Image
                    src={heroRightArt}
                    alt=""
                    fill
                    className="object-contain object-bottom object-center md:object-right"
                    sizes="371px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-12">
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wide text-zinc-500">Product categories</h2>
              <nav className="mt-4 flex flex-col gap-1" aria-label="Product categories">
                <CategoryRow href="/acs" label="Air conditioners" active={mode === "acs"} />
                <CategoryRow href="/tvs" label="Televisions" active={mode === "tvs"} />
              </nav>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wide text-zinc-500">Characteristics</h2>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by characteristics">
                {chipLabels.map((label) => {
                  const on = selectedChips.has(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleChip(label)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:text-sm",
                        on
                          ? "border-[#003399] bg-[#003399] text-white"
                          : "border-zinc-200 bg-zinc-50 text-zinc-800 hover:border-zinc-300",
                      )}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500 sm:text-sm">
                <span className="shrink-0">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  className="h-10 min-w-[11rem] rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-900 shadow-sm focus:border-[#003399] focus:outline-none focus:ring-2 focus:ring-[#003399]/25"
                  style={{ color: navy }}
                >
                  <option value="newer">Newer arrivals</option>
                  <option value="price-asc">Price: Low to high</option>
                  <option value="price-desc">Price: High to low</option>
                </select>
              </label>
              <div className="relative w-full sm:max-w-xs">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.654 3.654a1 1 0 01-1.414 1.414l-3.654-3.654A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-[#003399] focus:outline-none focus:ring-2 focus:ring-[#003399]/25"
                />
              </div>
            </div>

            {filteredSorted.length === 0 ? (
              <p className="mt-10 rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-10 text-center text-sm text-zinc-600">
                No products match your filters. Try clearing characteristics or adjusting search.
              </p>
            ) : (
              <ul className="mt-8 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSorted.map((product, idx) => (
                  <li key={product.id}>
                    <ListingProductCard product={product} priority={idx < 3} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CtaReadySection />
      </div>

      <div className="hidden lg:block" style={{ position: "relative", top: "-400px", bottom: "unset" }}>
        <FloatingSelectionBar variant="hero" />
      </div>

 
 
    </div>
  );
}
