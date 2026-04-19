import type { StaticImageData } from "next/image";
import ProductCatalogImage from "../../public/products/img1.png";
import ProductCatalogImage3 from "../../public/products/img3.png";
import ProductCatalogImage4 from "../../public/products/img4.png";
import ProductCatalogImage5 from "../../public/products/img5.png";
import ProductCatalogImage6 from "../../public/products/img6.png";
import ProductCatalogImage7 from "../../public/products/img7.png";
import ProductCatalogImage8 from "../../public/products/img8.png";

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
};

export const products: Product[] = [
  {
    id: "tv-55-4k-uhd",
    name: 'Smart LED TV 55" 4K UHD',
    price: 89999,
    image: ProductCatalogImage,
    shortDescription:
      "Cinematic 4K clarity with vivid HDR and smart apps built in for the whole family.",
    description:
      "55-inch 4K UHD panel, wide color gamut, smooth motion handling, and an intuitive smart hub for streaming, gaming, and everyday viewing.",
    category: "TVs",
    catalogFeatures: [
      "3840x2160 Resolution",
      "Netflix/YouTube/HDR",
      "Dolby Audio",
      "VIDAA SYSTEM",
    ],
  },
  {
    id: "tv-50-4k-uhd",
    name: 'Smart LED TV 50" 4K UHD',
    price: 64999,
    image: ProductCatalogImage,
    shortDescription:
      "Compact living-room size with flagship picture processing and voice-ready controls.",
    description:
      "50-inch 4K display, HDR support, immersive sound, and a fast smart interface so apps and inputs respond instantly.",
    category: "TVs",
    catalogFeatures: [
      "3840x2160 Resolution",
      "Netflix/YouTube/HDR",
      "Dolby Audio",
      "VIDAA SYSTEM",
    ],
  },
  {
    id: "tv-43-full-hd",
    name: 'Smart LED TV 43" Full HD',
    price: 32999,
    image: ProductCatalogImage3,
    shortDescription:
      "Full HD clarity for bedrooms and dens — slim bezel design and efficient smart OS.",
    description:
      "43-inch Full HD panel, crisp upscaling for streaming, multiple HDMI ports, and energy-smart backlighting.",
    category: "TVs",
    catalogFeatures: [
      "1920x1080 Full HD",
      "Streaming apps ready",
      "Dolby Audio",
      "VIDAA SYSTEM",
    ],
  },
  {
    id: "tv-65-4k-uhd",
    name: 'Smart LED TV 65" 4K UHD',
    price: 119999,
    image: ProductCatalogImage4,
    shortDescription:
      "Room-filling picture for movies and sports with wide viewing angles and deep contrast.",
    description:
      "65-inch 4K UHD screen, HDR enhancement, low-latency game mode, and a premium smart experience for home theater setups.",
    category: "TVs",
    catalogFeatures: [
      "3840x2160 Resolution",
      "Netflix/YouTube/HDR",
      "Dolby Audio",
      "VIDAA SYSTEM",
    ],
  },
  {
    id: "tv-32-hd",
    name: 'Smart LED TV 32" HD',
    price: 18999,
    image: ProductCatalogImage5,
    shortDescription:
      "Compact HD smart TV — ideal for kitchens, guest rooms, and everyday streaming.",
    description:
      "32-inch HD panel, built-in Wi‑Fi, essential streaming apps, and a space-saving stand or wall-mount friendly chassis.",
    category: "TVs",
    catalogFeatures: [
      "HD ready panel",
      "Built-in Wi‑Fi",
      "Dolby Audio",
      "VIDAA SYSTEM",
    ],
  },
  {
    id: "ac-1-5-ton-inverter",
    name: "1.5 Ton Inverter AC",
    price: 72999,
    image: ProductCatalogImage6,
    shortDescription:
      "Balanced capacity for midsize rooms with inverter savings and quieter nights.",
    description:
      "1.5 ton split inverter, rapid cool mode, copper coils for durability, and multi-stage air filtration.",
    category: "ACs",
    catalogFeatures: [
      "Inverter compressor",
      "Fast cooling",
      "Low noise operation",
      "Energy efficient",
    ],
  },
  {
    id: "ac-1-ton-inverter",
    name: "1 Ton Inverter AC",
    price: 54999,
    image: ProductCatalogImage7,
    shortDescription:
      "Efficient cooling for smaller spaces with precise temperature control.",
    description:
      "1 ton inverter split, sleep mode curves, self-clean evaporator routine, and eco refrigerant for responsible performance.",
    category: "ACs",
    catalogFeatures: [
      "Inverter compressor",
      "Sleep comfort curves",
      "Low noise operation",
      "Energy efficient",
    ],
  },
  {
    id: "ac-2-ton-inverter",
    name: "2 Ton Inverter AC",
    price: 98999,
    image: ProductCatalogImage8,
    shortDescription:
      "High-capacity cooling for open plans and peak summer loads without compromise.",
    description:
      "2 ton inverter system, wide airflow louvers, intelligent defrost, and robust outdoor unit for demanding climates.",
    category: "ACs",
    catalogFeatures: [
      "Inverter compressor",
      "Wide airflow",
      "Fast cooling",
      "Energy efficient",
    ],
  },
];

export const catalogProducts = products;

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
