import Image from "next/image";
import Link from "next/link";
import CategoryExperienceImage from "../../public/categoryexperience/img1.png";
import CategoryExperienceImage2 from "../../public/categoryexperience/img2.png";

/** Proven URLs already used elsewhere in the project (Unsplash) */
const IMG_TV =
  CategoryExperienceImage;
const IMG_AC =
  CategoryExperienceImage2;

export function CategoryExperience() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold text-black sm:text-base">
          That Power Your Life
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold uppercase tracking-wide text-black sm:text-3xl lg:text-4xl">
          Technological experiences
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <Link
            href="/tvs"
            className="group block overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003399] focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100">
              <Image
                src={IMG_TV}
                alt="Televisions in a modern living room"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20 transition group-hover:from-black/75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
                <span className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
                  Televisions
                </span>
                <span className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 shadow-sm transition group-hover:bg-zinc-50">
                  See More
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/acs"
            className="group block overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003399] focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100">
              <Image
                src={IMG_AC}
                alt="Air conditioner in a contemporary interior"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25 transition group-hover:from-black/75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
                  Air Conditioners
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
