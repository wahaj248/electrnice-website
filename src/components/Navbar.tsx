"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { useCartUi } from "@/context/CartUiContext";

const nav = [
  { href: "/", label: "Home" },
  { href: "/tvs", label: "TVs" },
  { href: "/acs", label: "ACs" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 text-[#003399]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { openCart } = useCartUi();
  const t = useTranslations();
  const [locale, setLocale] = useState<"en" | "es">("en");

  function setLocaleCookie(locale: "en" | "es") {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `NEXT_LOCALE=${locale}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
    window.location.reload();
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);
    const v = m?.[1];
    if (v === "es" || v === "en") setLocale(v);
  }, []);

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return active ? "text-[#003399]" : "text-zinc-600 hover:text-zinc-900";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0 leading-none">
          <span className="block text-xl font-bold tracking-tight text-[#003399] sm:text-2xl">
            HYUNDAI
          </span>
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Electronics
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex"
          aria-label="Main"
        >
          {nav.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            const translated =
              label === "Home" ? t("nav.home") : label === "TVs" ? t("nav.tvs") : t("nav.acs");
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  active
                    ? "text-[#003399]"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {translated}
                {active ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#003399]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#003399] transition hover:bg-zinc-50"
            aria-label={t("nav.openSelectedProducts")}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" />
              <circle cx="9" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#003399] px-1 text-[11px] font-bold text-white tabular-nums">
                {itemCount}
              </span>
            ) : null}
          </button>

          <div className="hidden md:block">
            <label className="sr-only" htmlFor="locale-switch">
              {t("nav.language")}
            </label>
            <select
              id="locale-switch"
              value={locale}
              onChange={(e) => setLocaleCookie(e.target.value as "en" | "es")}
              className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 focus:border-[#003399] focus:outline-none focus:ring-2 focus:ring-[#003399]/25"
            >
              <option value="en">{t("language.english")}</option>
              <option value="es">{t("language.spanish")}</option>
            </select>
          </div>

          <Link
            href="/#contact"
            className="hidden h-10 shrink-0 items-center justify-center rounded-full bg-[#003399] px-5 text-sm font-semibold text-white transition hover:bg-[#00287a] md:inline-flex sm:px-6"
          >
            {t("nav.contactUs")}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#003399] md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`border-t border-zinc-100 bg-white shadow-lg md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6" aria-label="Mobile">
          <ul className="flex flex-col divide-y divide-zinc-100">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 text-base font-medium ${linkClass(href)}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label === "Home" ? t("nav.home") : label === "TVs" ? t("nav.tvs") : t("nav.acs")}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                {t("nav.language")}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLocaleCookie("en")}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                >
                  {t("language.english")}
                </button>
                <button
                  type="button"
                  onClick={() => setLocaleCookie("es")}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                >
                  {t("language.spanish")}
                </button>
              </div>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-3 text-base font-semibold text-[#003399]"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.contactUs")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
