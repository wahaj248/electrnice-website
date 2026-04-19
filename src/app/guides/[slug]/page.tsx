import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guidePosts } from "@/lib/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guidePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) return { title: "Guide" };
  return { title: post.title, description: post.description };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium"
        style={{ color: "#0056b3" }}
      >
        ← Back to home
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
        {post.category}
      </p>
      <h1
        className="mt-2 text-3xl font-bold tracking-tight"
        style={{ color: "#001f3f" }}
      >
        {post.title}
      </h1>
      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
        />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-zinc-600">{post.description}</p>
      <p className="mt-6 leading-relaxed text-zinc-700">{post.body}</p>
    </div>
  );
}
