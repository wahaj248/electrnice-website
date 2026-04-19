import Image from "next/image";
import Link from "next/link";
import SmartTvImage from "../../public/products/left.png";

export function SmartTvFeatureSection() {
  return (
    <section className="bg-[#f1f3f5] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[16/11] w-full">
            <Image
              src={SmartTvImage}
              alt="HYUNDAI smart TV with streaming apps on screen"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Your HYUNDAI Smart TV with Google TV
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-800 sm:text-lg">
            Access your favorite apps, high-quality content, and voice control all
            in one place.
          </p>
          <div className="mt-8">
            <Link
              href="/tvs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#003399] px-10 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00287a]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
