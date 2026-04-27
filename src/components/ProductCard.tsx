import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { resolveImageSrc } from "@/lib/products";
import { formatInr } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-sky-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-900"
    >
      <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={resolveImageSrc(product.image)}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
          {product.category}
        </p>
        <h2 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h2>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {product.shortDescription}
        </p>
        <p className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {formatInr(product.price)}
        </p>
      </div>
    </Link>
  );
}
