import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/product-detail/ProductDetailView";
import { formatInr } from "@/lib/format";
import {
  getLocalizedProductDetail,
  resolveLocaleFromCookie,
} from "@/lib/product-detail-locales";
import { getProductById, products, resolveImageSrc } from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    const messages = (await import(`../../../../messages/en.json`)).default;
    return { title: messages.productDetail.metaFallbackTitle };
  }
  const cookieStore = await cookies();
  const locale = resolveLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const localized = getLocalizedProductDetail(locale, product);
  return {
    title: localized.name,
    description: localized.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const cookieStore = await cookies();
  const locale = resolveLocaleFromCookie(cookieStore.get("NEXT_LOCALE")?.value);

  const imageSrc = resolveImageSrc(product.image);
  const gallerySrcs = Array.from({ length: 5 }, () => imageSrc);

  const main = getLocalizedProductDetail(locale, product);

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map((p) => {
      const loc = getLocalizedProductDetail(locale, p);
      return {
        id: p.id,
        name: loc.name,
        shortDescription: loc.shortDescription,
        imageSrc: resolveImageSrc(p.image),
        priceLabel: formatInr(p.price),
      };
    });

  return (
    <ProductDetailView
      product={{
        id: product.id,
        name: main.name,
        priceLabel: formatInr(product.price),
        category: product.category,
        shortDescription: main.shortDescription,
        description: main.description,
        imageSrc,
        gallerySrcs,
      }}
      extra={main.extra}
      related={related}
    />
  );
}
