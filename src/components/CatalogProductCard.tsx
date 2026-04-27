import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { resolveImageSrc } from "@/lib/products";

const navy = "#003399";

/** Catalog image viewport — same for every product card */
const IMG_W = 252;
const IMG_H = 174;

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      style={{ color: navy }}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CatalogProductCard({
  product,
  priority = false,
}: {
  product: Product;
  /** First catalog row: eager load + skip optimizer edge cases on some PNGs */
  priority?: boolean;
}) {
  const features = product.catalogFeatures ?? [];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <div className="flex w-full justify-center bg-zinc-100 py-2">
        <div className="group relative h-[174px] w-[252px] shrink-0 overflow-hidden bg-zinc-100">
          <Image
            src={resolveImageSrc(product.image)}
            alt={product.name}
            fill
            priority={priority}
            unoptimized
            className="z-0 object-contain object-center transition duration-300 group-hover:scale-[1.02]"
            sizes={`${IMG_W}px`}
          />
          {features.length > 0 ? (
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ul className="w-full max-w-[220px] space-y-2 text-sm text-zinc-800">
                {features.map((f) => (
                  <li key={f} className="flex gap-2 font-medium">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-2 py-4">
        <h3
          className="text-base font-bold leading-snug sm:text-[17px]"
          style={{ color: navy }}
        >
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex h-10 min-w-[7.5rem] w-full items-center justify-center rounded-full border-2 bg-white px-6 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ borderColor: navy, color: navy }}
          >
            Select
          </Link>
        </div>
      </div>
    </article>
  );
}
