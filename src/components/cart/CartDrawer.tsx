"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { useCartUi } from "@/context/CartUiContext";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { getProductById, resolveImageSrc } from "@/lib/products";

const navy = "#003399";

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 10-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

function QtyButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition",
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function CartDrawer() {
  const { open, closeCart } = useCartUi();
  const { lines, setQuantity, removeItem, itemCount } = useCart();
  const t = useTranslations();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeCart]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = useMemo(() => {
    return lines.flatMap((l) => {
      const p = getProductById(l.productId);
      if (!p) return [];
      return [
        {
          id: p.id,
          name: p.name,
          shortDescription: p.shortDescription,
          imageSrc: resolveImageSrc(p.image),
          quantity: l.quantity,
        },
      ];
    });
  }, [lines]);

  return (
    <div
      className={[
        "fixed inset-0 z-[60]",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div
        className={[
          "absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={closeCart}
      />

      <aside
        className={[
          "absolute right-0 top-0 h-full w-full max-w-[460px] bg-white shadow-2xl ring-1 ring-black/10 transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={t("cartDrawer.title")}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
            <div>
              <h2 className="text-base font-bold text-zinc-900">{t("cartDrawer.title")}</h2>
              <p className="mt-0.5 text-xs text-zinc-500">
                {itemCount} {itemCount === 1 ? t("cartDrawer.item") : t("cartDrawer.items")}
              </p>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-600 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-900"
              aria-label={t("cartDrawer.close")}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 px-5 py-10 text-center">
                <p className="text-sm font-semibold text-zinc-900">{t("cartDrawer.emptyTitle")}</p>
                <p className="mt-2 text-sm text-zinc-600">
                  {t("cartDrawer.emptyDesc")}
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#003399] px-6 text-sm font-semibold text-white transition hover:bg-[#00287a]"
                >
                  {t("cartDrawer.browseProducts")}
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((it) => (
                  <li key={it.id} className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="flex gap-4">
                      <Link
                        href={`/products/${it.id}`}
                        onClick={closeCart}
                        className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-100"
                      >
                        <Image
                          src={it.imageSrc}
                          alt={it.name}
                          fill
                          className="object-contain object-center p-1"
                          sizes="80px"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/products/${it.id}`}
                          onClick={closeCart}
                          className="block truncate text-sm font-bold text-zinc-900 hover:text-[#003399]"
                        >
                          {it.name}
                        </Link>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500">
                          {it.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 rounded-full bg-zinc-100 px-2 py-1.5">
                        <QtyButton
                          onClick={() => setQuantity(it.id, Math.max(1, it.quantity - 1))}
                          disabled={it.quantity <= 1}
                        >
                          <span className="text-lg leading-none">−</span>
                        </QtyButton>
                        <span className="w-6 text-center text-sm font-bold text-zinc-900 tabular-nums">
                          {it.quantity}
                        </span>
                        <QtyButton onClick={() => setQuantity(it.id, it.quantity + 1)}>
                          <span className="text-lg leading-none">+</span>
                        </QtyButton>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        className="text-xs font-semibold text-zinc-500 transition hover:text-zinc-900"
                      >
                        {t("cartDrawer.remove")}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-zinc-200 p-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe57]"
            >
              {t("cartDrawer.contactWhatsapp")}
            </a>
            <p className="mt-3 text-center text-[11px] text-zinc-500">
              {t("cartDrawer.orReview")}{" "}
              <Link href="/cart" onClick={closeCart} className="font-semibold text-[#003399]">
                {t("cartDrawer.cartPage")}
              </Link>
              .
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

