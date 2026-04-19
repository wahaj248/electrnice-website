"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
                {label}
                {active ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#003399]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/#contact"
            className="hidden h-10 shrink-0 items-center justify-center rounded-full bg-[#003399] px-5 text-sm font-semibold text-white transition hover:bg-[#00287a] md:inline-flex sm:px-6"
          >
            Contact Us
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
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="block py-3 text-base font-semibold text-[#003399]"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
