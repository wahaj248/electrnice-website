import type { Metadata } from "next";
import { CartPageClient } from "@/components/CartPageClient";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review items in your cart.",
};

export default async function CartPage() {
  const t = await getTranslations();
  return (
    <div className="bg-zinc-50 py-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {t("cartShell.title")}
        </h1>
        <div className="mt-8">
          <CartPageClient />
        </div>
      </div>
    </div>
  );
}
