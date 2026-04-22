import Image from "next/image";
import Link from "next/link";
import type { ListingProduct } from "@/lib/products-listing";
const navy = "#003399";
const IMG_W = 252;
const IMG_H = 174;

export function ListingProductCard({
  product,
  priority = false,
}: {
  product: ListingProduct;
  priority?: boolean;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-zinc-100/80 shadow-sm ring-1 ring-zinc-200/80 transition hover:shadow-md">
      <div className="flex w-full justify-center bg-zinc-100 py-2">
        <div className="relative h-[174px] w-[252px] shrink-0 overflow-hidden bg-zinc-100">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            priority={priority}
            unoptimized
            className="object-contain object-center"
            sizes={`${IMG_W}px`}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white px-3 py-4 sm:px-4">
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
            className="inline-flex h-10 min-w-[7.5rem] w-full max-w-[220px] items-center justify-center rounded-full border-2 bg-white px-6 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ borderColor: navy, color: navy }}
          >
            Select
          </Link>
        </div>
      </div>
    </article>
  );
}
