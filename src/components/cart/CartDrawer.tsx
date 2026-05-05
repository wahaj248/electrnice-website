"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { useCartUi } from "@/context/CartUiContext";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { getProductById, resolveImageSrc } from "@/lib/products";

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 10-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2a9.86 9.86 0 0 0-8.45 15L2 22l5.18-1.36A9.96 9.96 0 1 0 12 2Zm0 18.1c-1.46 0-2.88-.38-4.14-1.1l-.3-.18-3.08.81.82-3-.2-.31A8.04 8.04 0 1 1 12 20.1Zm4.64-5.97c-.25-.12-1.48-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.16-.3.18-.56.06-.25-.12-1.06-.39-2.02-1.25-.74-.66-1.24-1.47-1.39-1.73-.14-.25-.02-.39.1-.51.11-.11.25-.3.37-.45.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.2-.48-.4-.42-.56-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.52c.12.17 1.72 2.62 4.16 3.67.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3Z"
      />
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
        "inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-zinc-900 ring-1 ring-zinc-200 transition",
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
          "absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl ring-1 ring-black/10 transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={t("cartDrawer.title")}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
            <h2 className="text-base font-bold text-zinc-900">{t("cartDrawer.title")}</h2>
            <button
              type="button"
              onClick={closeCart}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-600 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-900"
              aria-label={t("cartDrawer.close")}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
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
              <ul className="divide-y divide-zinc-200">
                {items.map((it) => (
                  <li key={it.id} className="py-4">
                    <div className="flex items-stretch gap-4">
                      <Link
                        href={`/products/${it.id}`}
                        onClick={closeCart}
                        className="relative w-20 shrink-0 self-stretch overflow-hidden rounded-lg bg-zinc-100"
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
                          className="block truncate text-[13px] font-bold leading-snug text-zinc-900 hover:text-[#003399]"
                        >
                          {it.name}
                        </Link>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-zinc-500">
                          {it.shortDescription}
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-1.5 py-1">
                            <QtyButton
                              onClick={() => setQuantity(it.id, Math.max(1, it.quantity - 1))}
                              disabled={it.quantity <= 1}
                            >
                              <span className="text-lg leading-none">−</span>
                            </QtyButton>
                            <span className="w-6 text-center text-[13px] font-bold leading-none text-zinc-900 tabular-nums">
                              {it.quantity}
                            </span>
                            <QtyButton onClick={() => setQuantity(it.id, it.quantity + 1)}>
                              <span className="text-lg leading-none">+</span>
                            </QtyButton>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(it.id)}
                            className="text-[11px] font-semibold text-zinc-500 transition hover:text-zinc-900"
                          >
                            {t("cartDrawer.remove")}
                          </button>
                        </div>
                      </div>
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
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon />
              {t("cartDrawer.contactWhatsapp")}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

