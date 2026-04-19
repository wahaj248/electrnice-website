import Image from "next/image";
import Link from "next/link";
import AboutCardsImage from "../../public/card/img1.png";
import AboutCardsImage2 from "../../public/card/img2.png";
import AboutCardsImage3 from "../../public/card/img3.png";
const cards = [
  {
    href: "/about",
    image:
      AboutCardsImage,
    brand: "HYUNDAI corporation",
    title: "About Company",
    alt: "Modern office building at dusk",
  },
  {
    href: "/products",
    image:
      AboutCardsImage2,
    brand: null as string | null,
    title: "About Our Products",
    alt: "HYUNDAI smart TV and home electronics",
  },
  {
    href: "/products",
    image:
      AboutCardsImage3,
    brand: null as string | null,
    title: "Catalog",
    alt: "Product catalogs and brochures",
  },
];

export function AboutCardsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003399] focus-visible:ring-offset-2 sm:min-h-[440px]"
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />
            {/* {card.brand ? (
              <p className="absolute left-0 right-0 top-10 z-10 px-4 text-center text-lg font-bold uppercase tracking-wide text-white drop-shadow-md sm:text-xl">
                {card.brand}
              </p>
            ) : null} */}
            <div className="relative z-10 mt-auto flex flex-col items-center px-6 pb-10 text-center">
              <h3 className="text-xl font-semibold text-white drop-shadow-sm sm:text-2xl">
                {card.title}
              </h3>
              <span className="mt-6 inline-flex h-11 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold text-white transition group-hover:bg-white/10">
                Learn more
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
