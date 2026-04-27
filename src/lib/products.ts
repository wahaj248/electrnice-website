import type { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  shortDescription: string;
  description: string;
  category: string;
  /** Shown on home catalog card image hover overlay */
  catalogFeatures?: string[];
  /** Optional detail thumbnails (public paths); missing slots use main `image`. */
  gallery?: string[];
};

/** LED / Smart TV catalog — four Hyundai models only */
export const products: Product[] = [
  {
    id: "tv-32-hd",
    name: 'Smart TV HYUNDAI 32" HD Google Android TV Black',
    price: 18999,
    image: "/images/HYLED-32HD7A-1.jpg",
    shortDescription:
      "Enjoy the best image quality with the HYLED-32HD7A model.",
    description:
      "The Hyundai HYLED-32HD7A TV combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    category: "TVs",
    catalogFeatures: [
      '32" HD · Google Android TV',
      "Model HYLED-32HD7A",
      "Wi‑Fi · Android R",
      "Integrated speakers",
      "220V · Black",
    ],
    gallery: [
      "/images/HYLED-32HD7A-1.jpg",
      "/images/HYLED-32HD7A-2.jpg",
      "/images/HYLED-32HD7A-3.jpg",
      "/images/HYLED-32HD7A-4.jpg",
    ],
  },
  {
    id: "tv-43-full-hd",
    name: 'Smart TV HYUNDAI 43" Full HD Google Android TV Black',
    price: 32999,
    image: "/images/HYLED-43FHD7A-0.jpg",
    shortDescription:
      "Enjoy the best image quality with the HYLED-43FHD7A model.",
    description:
      "The Hyundai HYLED-43FHD7A combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    category: "TVs",
    catalogFeatures: [
      '43" Full HD · Google Android TV',
      "Model HYLED-43FHD7A",
      "Wi‑Fi · Android R",
      "Full HD panel",
      "Black finish",
    ],
    gallery: [
      "/images/HYLED-43FHD7A-0.jpg",
      "/images/HYLED-43FHD7A-2.jpg",
      "/images/HYLED-43FHD7A-3-600x600.jpg",
      "/images/HYLED-43FHD7A-4.jpg",
    ],
  },
  {
    id: "tv-50-4k-uhd",
    name: 'Smart TV HYUNDAI 50" UHD 4K Google Android TV Black',
    price: 64999,
    image: "/images/HYLED-50UHD7A-1.jpg",
    shortDescription:
      "Enjoy the best image quality with the HYLED-50UHD7A model.",
    description:
      "The Hyundai HYLED-50UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    category: "TVs",
    catalogFeatures: [
      '50" 4K UHD · Google Android TV',
      "Model HYLED-50UHD7A",
      "Wi‑Fi · Android R",
      "3840×2160",
      "Black finish",
    ],
    gallery: [
      "/images/HYLED-50UHD7A-1.jpg",
      "/images/HYLED-50UHD7A-2.jpg",
      "/images/HYLED-50UHD7A-3.jpg",
      "/images/HYLED-50UHD7A-4.jpg",
    ],
  },
  {
    id: "tv-58-4k-uhd",
    name: 'Smart TV HYUNDAI 58" UHD 4K Google Android TV Black',
    price: 104999,
    image: "/images/HYLED-58UHD7A-0.jpg",
    shortDescription:
      "Enjoy the best image quality with the HYLED-58UHD7A model.",
    description:
      "The Hyundai HYLED-58UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    category: "TVs",
    catalogFeatures: [
      '58" 4K UHD · Google Android TV',
      "Model HYLED-58UHD7A",
      "Wi‑Fi · 3× HDMI · 2× USB",
      "3840×2160 · Android R",
      "Black finish",
    ],
    gallery: [
      "/images/HYLED-58UHD7A-0.jpg",
      "/images/HYLED-58UHD7A-2-600x600.jpg",
      "/images/HYLED-58UHD7A-3.jpg",
      "/images/HYLED-58UHD7A-4.jpg",
    ],
  },
  {
    id: "ac-1-5-ton-inverter",
    name: "HYUNDAI Inverter 3224 Air Conditioner Cooling/Heating White",
    price: 72999,
    image: "/images/HY10INV-3200FC-1.jpg",
    shortDescription:
      "The perfect ally for your comfort. Inverter technology with 3224 kilocalories for superior performance and unmatched energy savings.",
    description:
      "Discover uninterrupted comfort with the HYUNDAI Inverter air conditioner at 3224 kilocalories. Its advanced Inverter technology adjusts energy use to your temperature needs, delivering optimal performance and a significant reduction in electricity use. Ideal for small or medium spaces, it offers cooling in summer and heating in winter with quiet, stable operation — in a modern white design made to blend into your home.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 3224 W",
      "Model HY10INV-3200FC",
      "Cooling & heating",
      "R410A · Energy A+",
      "220V · White",
    ],
    gallery: [
      "/images/HY10INV-3200FC-1.jpg",
      "/images/HY10INV-3200FC-2.jpg",
      "/images/HY10INV-3200FC-3.jpg",
      "/images/HY10INV-3200FC-4.jpg",
    ],
  },
  {
    id: "ac-3224-on-off",
    name: "HYUNDAI On-Off 3224 Air Conditioner Cooling/Heating White",
    price: 52999,
    image: "/images/HY9-3200FC-1.jpg",
    shortDescription:
      "Ideal for medium-sized rooms, this 3224 W On-Off air conditioner keeps a comfortable temperature with straightforward, dependable operation — the right mix of power and practicality.",
    description:
      "Enjoy reliable comfort with the HYUNDAI On-Off air conditioner at 3224 W. Strong cooling and heating performance suits medium-sized rooms, while simple On-Off control makes temperature changes easy. A compact white cabinet fits neatly into modern spaces, with efficient operation when you need climate relief.",
    category: "ACs",
    catalogFeatures: [
      "On-Off · 3224 W",
      "Model HY9-3200FC",
      "Cooling & heating",
      "R410A · Energy A",
      "220V · White",
    ],
    gallery: [
      "/images/HY9-3200FC-1.jpg",
      "/images/HY9-3200FC-2.jpg",
      "/images/HY9-3200FC-3.jpg",
      "/images/HY9-3200FC-4.jpg",
    ],
  },
  {
    id: "ac-5275-on-off",
    name: "HYUNDAI On-Off 5275 Air Conditioner Cooling/Heating White",
    price: 87999,
    image: "/images/HY9-5000FC-1.jpg",
    shortDescription:
      "For spaces that need more, this 5275 W On-Off air conditioner delivers strong cooling and heating. Simple, effective control and a bold white cabinet bring dependable comfort home.",
    description:
      "When you need higher capacity, the HYUNDAI On-Off air conditioner at 5275 W steps up with efficient cooling and heating for larger rooms. On-Off operation keeps temperature control straightforward, while a robust white design suits demanding installs year-round.",
    category: "ACs",
    catalogFeatures: [
      "On-Off · 5275 W",
      "Model HY9-5000FC",
      "Cooling & heating",
      "R410A · Energy A",
      "220V · White",
    ],
    gallery: [
      "/images/HY9-5000FC-1.jpg",
      "/images/HY9-5000FC-2.jpg",
      "/images/HY9-5000FC-3.jpg",
      "/images/HY9-5000FC-4.jpg",
    ],
  },
  {
    id: "ac-6540-on-off",
    name: "HYUNDAI On-Off 6540 Air Conditioner Cooling/Heating White",
    price: 96999,
    image: "/images/HY8-6000FC-1.jpg",
    shortDescription:
      "Year-round comfort with serious capacity: this 6540 W On-Off air conditioner keeps you cool in summer and warm in winter, wrapped in a clean white finish that suits any room.",
    description:
      "The HYUNDAI On-Off air conditioner at 6540 W is built for homes that need strong cooling and heating. On-Off control keeps setpoints easy to manage, while an efficient system helps limit waste — all in an elegant white cabinet that blends with your décor.",
    category: "ACs",
    catalogFeatures: [
      "On-Off · 6540 W",
      "Model HY8-6000FC",
      "Cooling & heating",
      "R410A · Energy A",
      "220V · White",
    ],
    gallery: [
      "/images/HY8-6000FC-1.jpg",
      "/images/HY8-6000FC-2.jpg",
      "/images/HY8-6000FC-3.jpg",
      "/images/HY8-6000FC-4.jpg",
    ],
  },
  {
    id: "ac-1-ton-inverter",
    name: "HYUNDAI Inverter 3200 Air Conditioner Cooling/Heating White",
    price: 54999,
    image: "/images/HY11INV-3200FC-1_N.jpg",
    shortDescription:
      "Comfort in every corner of your home. With 3200 BTU, this inverter unit provides the perfect climate while saving you money.",
    description:
      "Small but powerful. The HYUNDAI Inverter air conditioner with 3200 BTU/h delivers superior performance in a compact format, ideal for small to medium-sized rooms. Thanks to Inverter technology, this unit automatically adjusts energy consumption, allowing you to enjoy significant savings without sacrificing comfort. Cool in summer, warm in winter, and energy efficiency that cares for both your home and the environment.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 3200 W cooling",
      "Model HY11INV-3200FC",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-3200FC-1_N.jpg",
      "/images/HY11INV-3200FC-2_N.jpg",
      "/images/HY11INV-3200FC-3_N.jpg",
      "/images/HY11INV-3200FC-4_N.jpg",
    ],
  },
  {
    id: "ac-3200-wifi",
    name: "HYUNDAI Inverter WIFI 3200 Cooling/Heating Air Conditioner White",
    price: 61999,
    image: "/images/HY11INV-3200FCW-1_N.jpg",
    shortDescription:
      "The HYUNDAI Inverter HY11INV-3200FCW pairs efficient inverter performance with Wi‑Fi control from your smartphone, so you can set the perfect temperature from anywhere.",
    description:
      "Efficient, connected climate control at 3200 W. Inverter technology keeps temperatures steady while trimming energy use, and built‑in Wi‑Fi lets you manage the unit from your phone for comfort at home or away — in a quiet, modern white design.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 3200 W · Wi‑Fi",
      "Model HY11INV-3200FCW",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-3200FCW-1_N.jpg",
      "/images/HY11INV-3200FCW-2_N-Front.jpg",
      "/images/HY11INV-3200FCW-5_N.jpg",
      "/images/HY11INV-3200FCW-6_N.jpg",
    ],
  },
  {
    id: "ac-2-ton-inverter",
    name: "HYUNDAI Inverter 5000 Air Conditioner Cooling/Heating White",
    price: 98999,
    image: "/images/HY10INV-5000FC-1.jpg",
    shortDescription:
      "Power and efficiency in one Inverter air conditioner at 5000 kilocalories per hour. Keep large spaces at the ideal temperature while cutting energy use.",
    description:
      "If you need a powerful, efficient air conditioner, the HYUNDAI Inverter at 5000 kilocalories per hour is the right choice. Built for large rooms, it delivers precise, steady comfort all year. Inverter technology optimizes energy use and helps extend the life of the unit — comfortable on hot days and cold days alike, in a reliable, modern, lower-impact package.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 5000 W",
      "Model HY10INV-5000FC",
      "Cooling & heating",
      "R410A · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY10INV-5000FC-1.jpg",
      "/images/HY10INV-5000FC-2.jpg",
      "/images/HY10INV-5000FC-3.jpg",
      "/images/HY10INV-5000FC-4.jpg",
    ],
  },
  {
    id: "ac-5000-hy11",
    name: "HYUNDAI Inverter 5000 Air Conditioner Cooling/Heating White — HY11INV-5000FC",
    price: 101999,
    image: "/images/HY11INV-5000FC-1_N.jpg",
    shortDescription:
      "The perfect balance of power and savings: 5000 kilocalories per hour with Inverter technology keeps large spaces comfortable year-round, in an elegant white finish.",
    description:
      "The HYUNDAI Inverter at 5000 kilocalories per hour combines next-generation efficiency with real comfort for large rooms. It adapts output to your heating and cooling needs while trimming energy use, offers cold in summer and heat in winter, and pairs a clean white look with dependable inverter performance.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 5000 W",
      "Model HY11INV-5000FC",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-5000FC-1_N.jpg",
      "/images/HY11INV-5000FC-2_N.jpg",
      "/images/HY11INV-5000FC-3_N.jpg",
      "/images/HY11INV-5000FC-4_N.jpg",
    ],
  },
  {
    id: "ac-5000-wifi",
    name: "HYUNDAI Inverter WIFI 5000 Cooling/Heating Air Conditioner White",
    price: 109999,
    image: "/images/HY11INV-5000FCW-1_N.jpg",
    shortDescription:
      "Efficiency and convenience in one unit. The HYUNDAI Inverter HY11INV-5000FCW delivers strong cooling with low energy use thanks to Inverter technology, and Wi‑Fi lets you dial in the perfect temperature from your phone.",
    description:
      "The HYUNDAI Inverter HY11INV-5000FCW pairs 5000 W capacity with smarter control: Inverter output tracks your setpoint to limit waste, while Wi‑Fi scheduling and remote control keep large rooms comfortable whether you are home or away.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 5000 W · Wi‑Fi",
      "Model HY11INV-5000FCW",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-5000FCW-1_N.jpg",
      "/images/HY11INV-5000FCW-2_N-Front.jpg",
      "/images/HY11INV-5000FCW-5_N.jpg",
      "/images/HY11INV-5000FCW-6_N.jpg",
    ],
  },
  {
    id: "ac-6400-inverter",
    name: "HYUNDAI Inverter 6400 Air Conditioner Cooling/Heating White",
    price: 119999,
    image: "/images/HY10INV-5000FC-1.jpg",
    shortDescription:
      "Maximum capacity, minimum consumption. At 6400 W, this inverter air conditioner delivers whole-room comfort while optimizing energy use — refined white styling and serious performance.",
    description:
      "Maximum power and efficiency in one unit. The HYUNDAI Inverter air conditioner at 6400 W is built for demanding spaces that need steady cooling and heating. Inverter control adjusts output to hold the perfect temperature in both modes, with a clean white finish that suits modern interiors.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 6400 W",
      "Model HY10INV-6000FC",
      "Cooling & heating",
      "R410A · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY10INV-5000FC-1.jpg",
      "/images/HY10INV-5000FC-2.jpg",
      "/images/HY10INV-5000FC-3.jpg",
      "/images/HY10INV-5000FC-4.jpg",
    ],
  },
  {
    id: "ac-6400-hy11",
    name: "HYUNDAI Inverter 6400 Air Conditioner Cooling/Heating White — HY11INV-6000FC",
    price: 123999,
    image: "/images/HY11INV-6000FC-1_N.jpg",
    shortDescription:
      "For those who demand the best. This 6400 W inverter air conditioner keeps the ideal climate year-round with a modern look and efficient energy use — an essential partner for your home.",
    description:
      "Designed for large spaces, the HYUNDAI Inverter air conditioner at 6400 W delivers steady climate control whenever you need it. Inverter technology modulates power to match conditions for consistent, efficient performance — with quiet operation and a minimalist white finish suited to homes and workplaces alike.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 6400 W",
      "Model HY11INV-6000FC",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-6000FC-1_N.jpg",
      "/images/HY11INV-6000FC-2_N.jpg",
      "/images/HY11INV-6000FC-3_N.jpg",
      "/images/HY11INV-6000FC-4_N.jpg",
    ],
  },
  {
    id: "ac-6000-wifi",
    name: "HYUNDAI Inverter WIFI 6000 Cooling/Heating Air Conditioner White",
    price: 127999,
    image: "/images/HY11INV-6000FCW-1_N.jpg",
    shortDescription:
      "Experience whole-home comfort with the HYUNDAI Inverter HY11INV-6000FCW: Inverter efficiency trims power use while Wi‑Fi puts full control on your smartphone, so you can set the climate before you walk in the door.",
    description:
      "The HYUNDAI Inverter HY11INV-6000FCW combines 6400 W capacity with connected convenience — Inverter modulation keeps temperatures steady, Wi‑Fi adds remote scheduling, and advanced filtration supports cleaner indoor air in a refined white cabinet.",
    category: "ACs",
    catalogFeatures: [
      "Inverter · 6400 W · Wi‑Fi",
      "Model HY11INV-6000FCW",
      "Cooling & heating",
      "R32 · Energy A++",
      "220V · White",
    ],
    gallery: [
      "/images/HY11INV-6000FCW-1_N.jpg",
      "/images/HY11INV-6000FCW-2_N-Front.jpg",
      "/images/HY11INV-6000FCW-5_N.jpg",
      "/images/HY11INV-6000FCW-6_N.jpg",
    ],
  },
];

export const catalogProducts = products;

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function resolveImageSrc(image: string | StaticImageData): string {
  return typeof image === "string" ? image : image.src;
}

/** Five gallery URLs for product detail; uses `product.gallery` then fills with `mainSrc`. */
export function getGallerySrcs(product: Product, mainSrc: string): string[] {
  const g = product.gallery ?? [];
  return Array.from({ length: 5 }, (_, i) => g[i] ?? mainSrc);
}
