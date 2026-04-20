import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/product-detail/ProductDetailView";
import { formatInr } from "@/lib/format";
import { getProductDetailExtra } from "@/lib/product-detail-extras";
import { getProductById, products, resolveImageSrc } from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const imageSrc = resolveImageSrc(product.image);
  const gallerySrcs = Array.from({ length: 5 }, () => imageSrc);

  const extra = getProductDetailExtra(product.id);

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map((p) => ({
      id: p.id,
      name: p.name,
      shortDescription: p.shortDescription,
      imageSrc: resolveImageSrc(p.image),
      priceLabel: formatInr(p.price),
    }));

  return (
    <ProductDetailView
      product={{
        id: product.id,
        name: product.name,
        priceLabel: formatInr(product.price),
        category: product.category,
        shortDescription: product.shortDescription,
        description: product.description,
        imageSrc,
        gallerySrcs,
      }}
      extra={extra}
      related={related}
    />
  );
}
