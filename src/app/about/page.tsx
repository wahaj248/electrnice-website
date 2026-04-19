import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "HYUNDAI Electronics — engineered for excellence.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About HYUNDAI Electronics
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
        We bring the latest in display and climate control technology to your home.
        This demo page is linked from the home “About Company” card.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-semibold text-[#003399] hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
