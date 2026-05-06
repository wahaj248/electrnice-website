import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog" };
  const t = await getTranslations(`blogPosts.${post.translationNs}`);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations(`blogPosts.${post.translationNs}`);
  const tBlog = await getTranslations("blog");

  return (
    <div className="bg-white">
      <nav
        className="mx-auto max-w-6xl px-4 pt-8 text-sm text-zinc-600 sm:px-6"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="font-medium text-zinc-500 transition hover:text-[#003399]">
              {tBlog("breadcrumbHome")}
            </Link>
          </li>
          <li aria-hidden className="text-zinc-400">
            /
          </li>
          <li>
            <Link href="/blog" className="font-medium text-zinc-500 transition hover:text-[#003399]">
              {tBlog("breadcrumbBlog")}
            </Link>
          </li>
        </ol>
      </nav>

      <header className="relative mx-auto mt-6 max-w-[1160px] px-4 sm:px-6">
        <div className="relative aspect-[1160/550] max-h-[min(55vh,550px)] min-h-[280px] w-full overflow-hidden rounded-2xl bg-zinc-900 sm:min-h-[380px]">
          <Image
            src={post.heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1160px) 100vw, 1160px"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
              {t("heroEyebrow")}
            </p>
            <h1 className="mt-2 max-w-4xl text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[28px] lg:leading-[1.15]">
              {t("heroTitle")}
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(200px,260px)_1fr] lg:gap-14 xl:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-900">
              {tBlog("tocTitle")}
            </p>
            <nav
              className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 shadow-sm"
              aria-label={tBlog("tocTitle")}
            >
              <ul className="space-y-0.5 text-sm">
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-2 text-zinc-600 transition hover:bg-white hover:text-[#003399]"
                    >
                      {t(item.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 text-zinc-800 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28">
            <section id="introduccion" className="space-y-4">
              <p className="leading-relaxed text-zinc-700">{t("intro.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("intro.p2")}</p>
            </section>

            <section id="cual-es-mejor" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("cualEsMejor.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("cualEsMejor.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("cualEsMejor.p2")}</p>
            </section>

            <section id="google-tv-vs-tizen" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("googleTv.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("googleTv.p1")}</p>
              <h3 className="text-lg font-semibold text-zinc-900">{t("googleTv.h3Hyundai")}</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-700">
                <li>{t("googleTv.hyundaiLi1")}</li>
                <li>{t("googleTv.hyundaiLi2")}</li>
                <li>{t("googleTv.hyundaiLi3")}</li>
              </ul>
              <h3 className="text-lg font-semibold text-zinc-900">{t("googleTv.h3Samsung")}</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-700">
                <li>{t("googleTv.samsungLi1")}</li>
                <li>{t("googleTv.samsungLi2")}</li>
                <li>{t("googleTv.samsungLi3")}</li>
              </ul>
              <p className="leading-relaxed text-zinc-700">{t("googleTv.p2")}</p>
            </section>

            <section id="calidad-imagen" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("imagen.h2")}</h2>
              <h3 className="text-lg font-semibold text-zinc-900">{t("imagen.h3Resolucion")}</h3>
              <p className="leading-relaxed text-zinc-700">{t("imagen.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("imagen.p2")}</p>
            </section>

            <section id="sonido" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("sonido.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("sonido.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("sonido.p2")}</p>
            </section>

            <section id="tamanos" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("tamanos.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("tamanos.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("tamanos.p2")}</p>
            </section>

            <section id="precios" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("precios.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("precios.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("precios.p2")}</p>
            </section>

            <section id="garantia" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("garantia.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("garantia.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("garantia.p2")}</p>
            </section>

            <section id="veredicto" className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#001f3f]">{t("veredicto.h2")}</h2>
              <p className="leading-relaxed text-zinc-700">{t("veredicto.p1")}</p>
              <p className="leading-relaxed text-zinc-700">{t("veredicto.p2")}</p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
