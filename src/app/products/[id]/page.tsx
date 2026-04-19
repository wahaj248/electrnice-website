import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { formatInr } from "@/lib/format";
import { getProductById, products } from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="bg-white py-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/products"
          className="text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400"
        >
          ← Back to products
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              {formatInr(product.price)}
            </p>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton productId={product.id} />
              <Link
                href="/cart"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
