import type { Metadata } from "next";
import { CartPageClient } from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review items in your cart.",
};

export default function CartPage() {
  return (
    <div className="bg-zinc-50 py-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Cart
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Same top navigation and footer as Home and Products.
        </p>
        <div className="mt-8">
          <CartPageClient />
        </div>
      </div>
    </div>
  );
}
