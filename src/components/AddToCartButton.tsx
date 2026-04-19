"use client";

import { useCart } from "@/context/CartContext";

export function AddToCartButton({
  productId,
  label = "Add to cart",
}: {
  productId: string;
  label?: string;
}) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId, 1)}
      className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      {label}
    </button>
  );
}
