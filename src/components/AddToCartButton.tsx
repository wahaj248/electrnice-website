"use client";

import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

export function AddToCartButton({
  productId,
  label,
  quantity = 1,
  className,
}: {
  productId: string;
  label?: string;
  quantity?: number;
  className?: string;
}) {
  const { addItem } = useCart();
  const t = useTranslations();
  const displayLabel = label ?? t("addToCart.default");

  const base =
    "inline-flex h-11 items-center justify-center rounded-lg bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600";

  return (
    <button
      type="button"
      onClick={() => addItem(productId, quantity)}
      className={className ?? base}
    >
      {displayLabel}
    </button>
  );
}
