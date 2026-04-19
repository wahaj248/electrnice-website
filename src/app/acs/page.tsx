import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACs",
  description: "HYUNDAI air conditioners — efficiency and comfort.",
};

export default function ACsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        ACs
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Split and inverter ranges are listed alongside other electronics on the
        main catalog.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#003399] px-6 text-sm font-semibold text-white hover:bg-[#00287a]"
      >
        View products
      </Link>
    </div>
  );
}
