"use client";

import Image from "next/image";
import Link from "next/link";
import { cartLineTotal, useCart } from "@/context/CartContext";
import { formatInr } from "@/lib/format";
import { getProductById } from "@/lib/products";

export function CartPageClient() {
  const { lines, setQuantity, removeItem, clear, itemCount } = useCart();

  const subtotal = lines.reduce((sum, line) => sum + cartLineTotal(line), 0);

  if (lines.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-base font-medium text-zinc-900 dark:text-zinc-50">
          Your cart is empty
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Add items from a product page — navbar and footer stay the same here too.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-sky-600 px-5 text-sm font-semibold text-white hover:bg-sky-700"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        {lines.map((line) => {
          const product = getProductById(line.productId);
          if (!product) return null;
          return (
            <div
              key={line.productId}
              className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Link
                href={`/products/${product.id}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/products/${product.id}`}
                  className="font-semibold text-zinc-900 hover:text-sky-600 dark:text-zinc-50 dark:hover:text-sky-400"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {formatInr(product.price)} each
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Qty
                    <input
                      type="number"
                      min={1}
                      value={line.quantity}
                      onChange={(e) =>
                        setQuantity(line.productId, Number(e.target.value))
                      }
                      className="h-9 w-16 rounded-md border border-zinc-300 bg-white px-2 text-zinc-900 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => removeItem(line.productId)}
                    className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {formatInr(cartLineTotal(line))}
              </p>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => clear()}
          className="text-sm font-medium text-zinc-500 underline-offset-2 hover:text-zinc-800 hover:underline dark:hover:text-zinc-300"
        >
          Clear cart
        </button>
      </div>
      <aside className="h-fit rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Summary
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
        <p className="mt-4 flex items-center justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Subtotal</span>
          <span className="font-semibold text-zinc-900 dark:text-zinc-50">
            {formatInr(subtotal)}
          </span>
        </p>
        <button
          type="button"
          disabled
          className="mt-6 flex w-full h-11 cursor-not-allowed items-center justify-center rounded-lg bg-zinc-200 text-sm font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
          title="Demo only"
        >
          Checkout (demo)
        </button>
      </aside>
    </div>
  );
}
