export type BlogTocItem = { id: string; labelKey: string };

export type BlogPostDef = {
  slug: string;
  heroImage: string;
  translationNs: "hyundaiVsSamsung";
  toc: BlogTocItem[];
};

/** Blog posts metadata; long-form copy lives in messages under `blogPosts.<translationNs>`. */
export const blogPosts: BlogPostDef[] = [
  {
    slug: "hyundai-vs-samsung-smart-tv-rd",
    heroImage: "/blogimg/blog1.png",
    translationNs: "hyundaiVsSamsung",
    toc: [
      { id: "introduccion", labelKey: "toc.introduccion" },
      { id: "cual-es-mejor", labelKey: "toc.cualEsMejor" },
      { id: "google-tv-vs-tizen", labelKey: "toc.googleTvVsTizen" },
      { id: "calidad-imagen", labelKey: "toc.calidadImagen" },
      { id: "sonido", labelKey: "toc.sonido" },
      { id: "tamanos", labelKey: "toc.tamanos" },
      { id: "precios", labelKey: "toc.precios" },
      { id: "garantia", labelKey: "toc.garantia" },
      { id: "veredicto", labelKey: "toc.veredicto" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostDef | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
