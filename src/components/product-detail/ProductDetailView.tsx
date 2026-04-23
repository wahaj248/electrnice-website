"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { AddToCartButton } from "@/components/AddToCartButton";
import { CtaReadySection } from "@/components/CtaReadySection";
import type { ProductDetailExtra } from "@/lib/product-detail-extras";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navy = "#003399";

export type ProductDetailDTO = {
  id: string;
  name: string;
  priceLabel: string;
  category: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
  gallerySrcs: string[];
};

export type RelatedProductDTO = {
  id: string;
  name: string;
  shortDescription: string;
  imageSrc: string;
  priceLabel: string;
};

type TabKey = "description" | "manual";

export function ProductDetailView({
  product,
  extra,
  related,
}: {
  product: ProductDetailDTO;
  extra: ProductDetailExtra;
  related: RelatedProductDTO[];
}) {
  const t = useTranslations();
  const [tab, setTab] = useState<TabKey>("description");
  const [thumb, setThumb] = useState(0);
  const [qty, setQty] = useState(1);

  const mainSrc = product.gallerySrcs[thumb] ?? product.imageSrc;

  const categoryLine = useMemo(() => {
    if (product.category === "TVs") return t("productDetail.categoryEyebrowTv");
    if (product.category === "ACs") return t("productDetail.categoryEyebrowAc");
    return product.category.toUpperCase();
  }, [product.category, t]);

  const decQty = () => setQty((q) => Math.max(1, q - 1));
  const incQty = () => setQty((q) => Math.min(99, q + 1));

  return (
    <div className="bg-white pb-16 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className="text-xs text-zinc-500 sm:text-sm"
          aria-label={t("productDetail.breadcrumbNav")}
        >
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
            <li>
              <Link href="/" className="hover:text-zinc-800">
                {t("nav.home")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/products" className="hover:text-zinc-800">
                {t("catalog.breadcrumbProducts")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-zinc-800">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f3f4f6]">
              <Image
                src={mainSrc}
                alt={product.name}
                fill
                className="object-contain object-center p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-2.5">
              {product.gallerySrcs.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setThumb(i)}
                  className={`relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg bg-[#f3f4f6] ring-2 ring-offset-1 ring-offset-white transition sm:rounded-xl sm:ring-offset-2 ${
                    i === thumb ? "ring-[#003399]" : "ring-transparent hover:ring-zinc-300"
                  }`}
                  aria-label={t("productDetailExtra.viewImage", { number: i + 1 })}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain object-center p-1 sm:p-1.5"
                    sizes="(max-width: 640px) 18vw, 120px"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs"
              style={{ color: navy }}
            >
              {categoryLine}
            </p>
            <h1 className="mt-2 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
              {product.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
              <span>
                <span className="font-semibold text-zinc-800">
                  {t("productDetailExtra.sku")}:
                </span>{" "}
                {extra.sku}
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("productDetailExtra.inStock")}
              </span>
            </div>
            <p className="mt-2 text-xl font-bold text-zinc-900">{product.priceLabel}</p>

            <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
              {product.shortDescription} {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="inline-flex h-12 items-center rounded-full bg-zinc-100 px-1 text-zinc-900">
                <button
                  type="button"
                  onClick={decQty}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold transition hover:bg-white"
                  aria-label={t("productDetailExtra.decreaseQty")}
                >
                  −
                </button>
                <span className="min-w-[2.5rem] text-center text-sm font-semibold tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={incQty}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold transition hover:bg-white"
                  aria-label={t("productDetailExtra.increaseQty")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <AddToCartButton
                productId={product.id}
                label={t("productDetailExtra.select")}
                quantity={qty}
                className="inline-flex h-12 w-full min-w-0 items-center justify-center rounded-full border-2 border-zinc-900 bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-auto sm:min-w-[9rem]"
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:bg-[#1ebe57] sm:w-auto sm:px-8"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("productDetailExtra.contactWhatsapp")}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-2xl border-2 border-zinc-200 bg-zinc-50/40 p-2 sm:p-6">
          <div className="mx-auto flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              type="button"
              onClick={() => setTab("description")}
              className={`min-w-0 w-full rounded-full border-2 px-3 py-2.5 text-center text-sm font-semibold transition sm:w-1/2 sm:px-4 ${
                tab === "description"
                  ? "border-[#003399] bg-[#003399] text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              {t("productDetailExtra.tabDescription")}
            </button>
            <button
              type="button"
              onClick={() => setTab("manual")}
              className={`min-w-0 w-full rounded-full border-2 px-3 py-2.5 text-center text-sm font-semibold transition sm:w-1/2 sm:px-4 ${
                tab === "manual"
                  ? "border-[#003399] bg-[#003399] text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              {t("productDetailExtra.tabManual")}
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          {tab === "description" ? (
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto max-w-xs">
                <p className="text-2xl font-bold tracking-tight text-[#003399] sm:text-3xl">
                  {t("productDetail.brandName")}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  {t("productDetail.brandLine")}
                </p>
              </div>
              <div className="relative mx-auto mt-8 aspect-[16/10] max-w-2xl overflow-hidden rounded-2xl bg-[#f3f4f6]">
                <Image
                  src={mainSrc}
                  alt=""
                  fill
                  className="object-contain object-center p-4"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <h2 className="mt-8 text-lg font-bold text-zinc-900 sm:text-xl">{product.name}</h2>
              <p className="mt-4 text-left text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                {extra.longIntro}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-center text-2xl font-semibold text-zinc-300 sm:text-3xl">
                {t("productDetailExtra.manualHeading")}
              </p>
              <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#f3f4f6] p-5 sm:p-6">
                <div className="flex flex-col gap-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04] sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-100">
                      <svg
                        className="h-7 w-7 text-[#003399]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-bold text-zinc-900 sm:text-lg">
                        {t("productDetailExtra.manualCardTitle")}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
                        {t("productDetailExtra.manualCardDesc")}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center justify-center gap-2 self-stretch rounded-full bg-[#003399] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00287a] sm:self-auto"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    {extra.manualFileLabel}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="text-lg font-bold sm:text-xl" style={{ color: navy }}>
              {t("productDetail.description")}
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl" style={{ color: navy }}>
              {t("productDetail.technicalSpecs")}
            </h3>
            <div className="mt-4 rounded-2xl bg-[#f3f4f6] p-4 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {extra.grid.map((cell) => (
                  <div
                    key={cell.label}
                    className=" p-4 border-b border-zinc-200"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                      {cell.label}
                    </p>
                    <p className="mt-2 text-sm font-bold text-zinc-900">{cell.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl" style={{ color: navy }}>
              {t("productDetail.detailedSpecs")}
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl bg-[#f3f4f6]">
              <dl className="divide-y divide-zinc-200/80">
                {extra.list.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-semibold text-zinc-900 sm:max-w-[60%] sm:text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl" style={{ color: navy }}>
              {t("productDetail.related")}
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <article
                  key={r.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-[#f8f9fa] p-4 shadow-sm ring-1 ring-black/[0.04]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
                    <Image
                      src={r.imageSrc}
                      alt={r.name}
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-zinc-900 sm:text-base">{r.name}</h4>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    {r.shortDescription}
                  </p>
                  <p className="mt-2 text-sm font-bold text-zinc-900">{r.priceLabel}</p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      href={`/products/${r.id}`}
                      className="inline-flex h-10 min-w-[7.5rem] w-full items-center justify-center rounded-full border-2 border-[#003399] bg-white px-6 text-sm font-semibold text-[#003399] transition hover:bg-[#003399]/5"
                    >
                      {t("productDetail.select")}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <CtaReadySection />
          </div>
        </div>
      </div>
    </div>
  );
}
