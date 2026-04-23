import type { ProductDetailExtra } from "@/lib/product-detail-extras";
import { getProductDetailExtra } from "@/lib/product-detail-extras";
import type { Product } from "@/lib/products";

export type LocalizedProductDetail = {
  name: string;
  shortDescription: string;
  description: string;
  sku: string;
  longIntro: string;
  manualFileLabel: string;
  specs: { label: string; value: string }[];
};

const tvIntroEn =
  "Experience vivid entertainment with HYUNDAI smart display technology. Stream your favorite apps, enjoy immersive sound, and control everything with an interface designed to be fast, simple, and reliable for everyday use.";

const acIntroEn =
  "Stay comfortable year-round with HYUNDAI inverter climate solutions. Efficient cooling, quieter operation, and durable components engineered for dependable performance in real homes and offices.";

const tvIntroEs =
  "Disfruta de un entretenimiento vívido con la tecnología de pantalla inteligente HYUNDAI. Transmite tus apps favoritas, sumérgete en un sonido envolvente y controla todo con una interfaz rápida, sencilla y fiable para el día a día.";

const acIntroEs =
  "Mantente confortable todo el año con las soluciones inverter HYUNDAI para el clima. Enfriamiento eficiente, funcionamiento más silencioso y componentes duraderos diseñados para un rendimiento fiable en hogares y oficinas reales.";

const EN: Record<string, LocalizedProductDetail> = {
  "tv-55-4k-uhd": {
    name: 'Smart LED TV 55" 4K UHD',
    shortDescription:
      "Cinematic 4K clarity with vivid HDR and smart apps built in for the whole family.",
    description:
      "55-inch 4K UHD panel, wide color gamut, smooth motion handling, and an intuitive smart hub for streaming, gaming, and everyday viewing.",
    sku: "HY-55QATV-BK",
    longIntro: tvIntroEn,
    manualFileLabel: "Download PDF (2.4 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Resolution", value: "4K UHD 3840 × 2160" },
      { label: "System", value: "Google Android TV 11" },
      { label: "Model", value: "HY-55QATV-BK" },
      { label: "HDMI", value: "3 Ports (HDMI 2.0)" },
      { label: "Connectivity", value: "Wi‑Fi & Bluetooth 5.0" },
      { label: "Dimensions", value: "1230 mm × 710 mm × 78 mm" },
      { label: "USB", value: "2 Ports (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
    ],
  },
  "tv-50-4k-uhd": {
    name: 'Smart LED TV 50" 4K UHD',
    shortDescription:
      "Compact living-room size with flagship picture processing and voice-ready controls.",
    description:
      "50-inch 4K display, HDR support, immersive sound, and a fast smart interface so apps and inputs respond instantly.",
    sku: "HY-50QATV-BK",
    longIntro: tvIntroEn,
    manualFileLabel: "Download PDF (2.1 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Resolution", value: "4K UHD 3840 × 2160" },
      { label: "System", value: "Google Android TV 11" },
      { label: "Model", value: "HY-50QATV-BK" },
      { label: "HDMI", value: "3 Ports (HDMI 2.0)" },
      { label: "Connectivity", value: "Wi‑Fi & Bluetooth 5.0" },
      { label: "Dimensions", value: "1120 mm × 650 mm × 76 mm" },
      { label: "USB", value: "2 Ports (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
    ],
  },
  "tv-43-full-hd": {
    name: 'Smart LED TV 43" Full HD',
    shortDescription:
      "Full HD clarity for bedrooms and dens — slim bezel design and efficient smart OS.",
    description:
      "43-inch Full HD panel, crisp upscaling for streaming, multiple HDMI ports, and energy-smart backlighting.",
    sku: "HY-43GATV-BK",
    longIntro: tvIntroEn,
    manualFileLabel: "Download PDF (2.0 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Resolution", value: "Full HD 1920 × 1080" },
      { label: "System", value: "Google Android TV 11" },
      { label: "Model", value: "HY-43GATV-BK" },
      { label: "HDMI", value: "2 Ports (HDMI 2.0)" },
      { label: "Connectivity", value: "Wi‑Fi & Bluetooth 5.0" },
      { label: "Dimensions", value: "970 mm × 565 mm × 74 mm" },
      { label: "USB", value: "1 Port (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 8W × 2" },
    ],
  },
  "tv-65-4k-uhd": {
    name: 'Smart LED TV 65" 4K UHD',
    shortDescription:
      "Room-filling picture for movies and sports with wide viewing angles and deep contrast.",
    description:
      "65-inch 4K UHD screen, HDR enhancement, low-latency game mode, and a premium smart experience for home theater setups.",
    sku: "HY-65QATV-BK",
    longIntro: tvIntroEn,
    manualFileLabel: "Download PDF (2.8 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Resolution", value: "4K UHD 3840 × 2160" },
      { label: "System", value: "Google Android TV 11" },
      { label: "Model", value: "HY-65QATV-BK" },
      { label: "HDMI", value: "4 Ports (HDMI 2.0)" },
      { label: "Connectivity", value: "Wi‑Fi & Bluetooth 5.0" },
      { label: "Dimensions", value: "1450 mm × 835 mm × 82 mm" },
      { label: "USB", value: "2 Ports (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 12W × 2" },
    ],
  },
  "tv-32-hd": {
    name: 'Smart LED TV 32" HD',
    shortDescription:
      "Compact HD smart TV — ideal for kitchens, guest rooms, and everyday streaming.",
    description:
      "32-inch HD panel, built-in Wi‑Fi, essential streaming apps, and a space-saving stand or wall-mount friendly chassis.",
    sku: "HY-32GATV-BK",
    longIntro: tvIntroEn,
    manualFileLabel: "Download PDF (1.6 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Resolution", value: "HD 1366 × 768" },
      { label: "System", value: "Google Android TV 11" },
      { label: "Model", value: "HY-32GATV-BK" },
      { label: "HDMI", value: "2 Ports (HDMI 1.4)" },
      { label: "Connectivity", value: "Wi‑Fi & Bluetooth 5.0" },
      { label: "Dimensions", value: "730 mm × 430 mm × 70 mm" },
      { label: "USB", value: "1 Port (USB 2.0)" },
      { label: "Audio", value: "Stereo 6W × 2" },
    ],
  },
  "ac-1-5-ton-inverter": {
    name: "1.5 Ton Inverter AC",
    shortDescription:
      "Balanced capacity for midsize rooms with inverter savings and quieter nights.",
    description:
      "1.5 ton split inverter, rapid cool mode, copper coils for durability, and multi-stage air filtration.",
    sku: "HY-AC15INV-BK",
    longIntro: acIntroEn,
    manualFileLabel: "Download PDF (1.9 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Capacity", value: "1.5 Ton" },
      { label: "Type", value: "Inverter Split AC" },
      { label: "Model", value: "HY-AC15INV-BK" },
      { label: "Refrigerant", value: "R32" },
      { label: "Connectivity", value: "Wi‑Fi ready (optional)" },
      { label: "Indoor (W×H×D)", value: "985 mm × 295 mm × 225 mm" },
      { label: "Outdoor (W×H×D)", value: "800 mm × 545 mm × 330 mm" },
      { label: "Power Supply", value: "220–240V / 50Hz" },
    ],
  },
  "ac-1-ton-inverter": {
    name: "1 Ton Inverter AC",
    shortDescription:
      "Efficient cooling for smaller spaces with precise temperature control.",
    description:
      "1 ton inverter split, sleep mode curves, self-clean evaporator routine, and eco refrigerant for responsible performance.",
    sku: "HY-AC10INV-BK",
    longIntro: acIntroEn,
    manualFileLabel: "Download PDF (1.7 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Capacity", value: "1 Ton" },
      { label: "Type", value: "Inverter Split AC" },
      { label: "Model", value: "HY-AC10INV-BK" },
      { label: "Refrigerant", value: "R32" },
      { label: "Connectivity", value: "Wi‑Fi ready (optional)" },
      { label: "Indoor (W×H×D)", value: "850 mm × 280 mm × 210 mm" },
      { label: "Outdoor (W×H×D)", value: "720 mm × 495 mm × 310 mm" },
      { label: "Power Supply", value: "220–240V / 50Hz" },
    ],
  },
  "ac-2-ton-inverter": {
    name: "2 Ton Inverter AC",
    shortDescription:
      "High-capacity cooling for open plans and peak summer loads without compromise.",
    description:
      "2 ton inverter system, wide airflow louvers, intelligent defrost, and robust outdoor unit for demanding climates.",
    sku: "HY-AC20INV-BK",
    longIntro: acIntroEn,
    manualFileLabel: "Download PDF (2.2 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Capacity", value: "2 Ton" },
      { label: "Type", value: "Inverter Split AC" },
      { label: "Model", value: "HY-AC20INV-BK" },
      { label: "Refrigerant", value: "R32" },
      { label: "Connectivity", value: "Wi‑Fi ready (optional)" },
      { label: "Indoor (W×H×D)", value: "1100 mm × 315 mm × 235 mm" },
      { label: "Outdoor (W×H×D)", value: "890 mm × 650 mm × 360 mm" },
      { label: "Power Supply", value: "220–240V / 50Hz" },
    ],
  },
};

const ES: Record<string, LocalizedProductDetail> = {
  "tv-55-4k-uhd": {
    name: 'Smart TV LED 55" 4K UHD',
    shortDescription:
      "Claridad 4K cinematográfica con HDR vívido y apps inteligentes integradas para toda la familia.",
    description:
      "Panel 4K UHD de 55 pulgadas, amplia gama de color, movimiento fluido y un hub inteligente intuitivo para streaming, gaming y el día a día.",
    sku: "HY-55QATV-BK",
    longIntro: tvIntroEs,
    manualFileLabel: "Descargar PDF (2,4 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Resolución", value: "4K UHD 3840 × 2160" },
      { label: "Sistema", value: "Google Android TV 11" },
      { label: "Modelo", value: "HY-55QATV-BK" },
      { label: "HDMI", value: "3 puertos (HDMI 2.0)" },
      { label: "Conectividad", value: "Wi‑Fi y Bluetooth 5.0" },
      { label: "Dimensiones", value: "1230 mm × 710 mm × 78 mm" },
      { label: "USB", value: "2 puertos (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
    ],
  },
  "tv-50-4k-uhd": {
    name: 'Smart TV LED 50" 4K UHD',
    shortDescription:
      "Tamaño ideal para la sala, con procesamiento de imagen de gama alta y control por voz.",
    description:
      "Pantalla 4K de 50 pulgadas, HDR, sonido envolvente e interfaz inteligente rápida para que apps e entradas respondan al instante.",
    sku: "HY-50QATV-BK",
    longIntro: tvIntroEs,
    manualFileLabel: "Descargar PDF (2,1 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Resolución", value: "4K UHD 3840 × 2160" },
      { label: "Sistema", value: "Google Android TV 11" },
      { label: "Modelo", value: "HY-50QATV-BK" },
      { label: "HDMI", value: "3 puertos (HDMI 2.0)" },
      { label: "Conectividad", value: "Wi‑Fi y Bluetooth 5.0" },
      { label: "Dimensiones", value: "1120 mm × 650 mm × 76 mm" },
      { label: "USB", value: "2 puertos (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
    ],
  },
  "tv-43-full-hd": {
    name: 'Smart TV LED 43" Full HD',
    shortDescription:
      "Full HD para dormitorios y espacios reducidos — marco fino y sistema inteligente eficiente.",
    description:
      "Panel Full HD de 43 pulgadas, escalado nítido para streaming, varios puertos HDMI y retroiluminación eficiente.",
    sku: "HY-43GATV-BK",
    longIntro: tvIntroEs,
    manualFileLabel: "Descargar PDF (2,0 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Resolución", value: "Full HD 1920 × 1080" },
      { label: "Sistema", value: "Google Android TV 11" },
      { label: "Modelo", value: "HY-43GATV-BK" },
      { label: "HDMI", value: "2 puertos (HDMI 2.0)" },
      { label: "Conectividad", value: "Wi‑Fi y Bluetooth 5.0" },
      { label: "Dimensiones", value: "970 mm × 565 mm × 74 mm" },
      { label: "USB", value: "1 puerto (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 8W × 2" },
    ],
  },
  "tv-65-4k-uhd": {
    name: 'Smart TV LED 65" 4K UHD',
    shortDescription:
      "Imagen que llena la habitación para cine y deportes, con amplios ángulos de visión y buen contraste.",
    description:
      "Pantalla 4K UHD de 65 pulgadas, mejora HDR, modo juego de baja latencia y experiencia smart premium para home theater.",
    sku: "HY-65QATV-BK",
    longIntro: tvIntroEs,
    manualFileLabel: "Descargar PDF (2,8 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Resolución", value: "4K UHD 3840 × 2160" },
      { label: "Sistema", value: "Google Android TV 11" },
      { label: "Modelo", value: "HY-65QATV-BK" },
      { label: "HDMI", value: "4 puertos (HDMI 2.0)" },
      { label: "Conectividad", value: "Wi‑Fi y Bluetooth 5.0" },
      { label: "Dimensiones", value: "1450 mm × 835 mm × 82 mm" },
      { label: "USB", value: "2 puertos (USB 2.0)" },
      { label: "Audio", value: "Dolby Digital Plus 12W × 2" },
    ],
  },
  "tv-32-hd": {
    name: 'Smart TV LED 32" HD',
    shortDescription:
      "Smart TV HD compacta — ideal para cocinas, habitaciones de invitados y streaming diario.",
    description:
      "Panel HD de 32 pulgadas, Wi‑Fi integrado, apps de streaming esenciales y chasis compacto apto para pie o pared.",
    sku: "HY-32GATV-BK",
    longIntro: tvIntroEs,
    manualFileLabel: "Descargar PDF (1,6 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Resolución", value: "HD 1366 × 768" },
      { label: "Sistema", value: "Google Android TV 11" },
      { label: "Modelo", value: "HY-32GATV-BK" },
      { label: "HDMI", value: "2 puertos (HDMI 1.4)" },
      { label: "Conectividad", value: "Wi‑Fi y Bluetooth 5.0" },
      { label: "Dimensiones", value: "730 mm × 430 mm × 70 mm" },
      { label: "USB", value: "1 puerto (USB 2.0)" },
      { label: "Audio", value: "Estéreo 6W × 2" },
    ],
  },
  "ac-1-5-ton-inverter": {
    name: "Aire acondicionado inverter 1,5 toneladas",
    shortDescription:
      "Capacidad equilibrada para habitaciones medianas, ahorro inverter y noches más silenciosas.",
    description:
      "Split inverter 1,5 ton, modo enfriamiento rápido, serpentines de cobre para durabilidad y filtrado de aire en varias etapas.",
    sku: "HY-AC15INV-BK",
    longIntro: acIntroEs,
    manualFileLabel: "Descargar PDF (1,9 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Capacidad", value: "1,5 toneladas" },
      { label: "Tipo", value: "Aire split inverter" },
      { label: "Modelo", value: "HY-AC15INV-BK" },
      { label: "Refrigerante", value: "R32" },
      { label: "Conectividad", value: "Wi‑Fi preparado (opcional)" },
      { label: "Interior (An×Al×Pr)", value: "985 mm × 295 mm × 225 mm" },
      { label: "Exterior (An×Al×Pr)", value: "800 mm × 545 mm × 330 mm" },
      { label: "Alimentación", value: "220–240V / 50Hz" },
    ],
  },
  "ac-1-ton-inverter": {
    name: "Aire acondicionado inverter 1 tonelada",
    shortDescription:
      "Enfriamiento eficiente para espacios más pequeños con control de temperatura preciso.",
    description:
      "Split inverter 1 tonelada, curvas de modo sueño, rutina de autolimpieza del evaporador y refrigerante ecológico.",
    sku: "HY-AC10INV-BK",
    longIntro: acIntroEs,
    manualFileLabel: "Descargar PDF (1,7 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Capacidad", value: "1 tonelada" },
      { label: "Tipo", value: "Aire split inverter" },
      { label: "Modelo", value: "HY-AC10INV-BK" },
      { label: "Refrigerante", value: "R32" },
      { label: "Conectividad", value: "Wi‑Fi preparado (opcional)" },
      { label: "Interior (An×Al×Pr)", value: "850 mm × 280 mm × 210 mm" },
      { label: "Exterior (An×Al×Pr)", value: "720 mm × 495 mm × 310 mm" },
      { label: "Alimentación", value: "220–240V / 50Hz" },
    ],
  },
  "ac-2-ton-inverter": {
    name: "Aire acondicionado inverter 2 toneladas",
    shortDescription:
      "Alta capacidad para plantas abiertas y picos de calor sin renunciar al confort.",
    description:
      "Sistema inverter 2 toneladas, lamas de flujo amplio, desescarche inteligente y unidad exterior robusta para climas exigentes.",
    sku: "HY-AC20INV-BK",
    longIntro: acIntroEs,
    manualFileLabel: "Descargar PDF (2,2 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Capacidad", value: "2 toneladas" },
      { label: "Tipo", value: "Aire split inverter" },
      { label: "Modelo", value: "HY-AC20INV-BK" },
      { label: "Refrigerante", value: "R32" },
      { label: "Conectividad", value: "Wi‑Fi preparado (opcional)" },
      { label: "Interior (An×Al×Pr)", value: "1100 mm × 315 mm × 235 mm" },
      { label: "Exterior (An×Al×Pr)", value: "890 mm × 650 mm × 360 mm" },
      { label: "Alimentación", value: "220–240V / 50Hz" },
    ],
  },
};

export const PRODUCT_DETAIL_LOCALES: Record<"en" | "es", Record<string, LocalizedProductDetail>> =
  { en: EN, es: ES };

export function resolveLocaleFromCookie(raw: string | undefined): "en" | "es" {
  return raw === "es" ? "es" : "en";
}

export function getLocalizedProductDetail(
  locale: "en" | "es",
  product: Product,
): {
  name: string;
  shortDescription: string;
  description: string;
  extra: ProductDetailExtra;
} {
  const entry = PRODUCT_DETAIL_LOCALES[locale][product.id];
  if (!entry) {
    return {
      name: product.name,
      shortDescription: product.shortDescription,
      description: product.description,
      extra: getProductDetailExtra(product.id),
    };
  }
  return {
    name: entry.name,
    shortDescription: entry.shortDescription,
    description: entry.description,
    extra: {
      sku: entry.sku,
      grid: entry.specs,
      list: entry.specs,
      longIntro: entry.longIntro,
      manualFileLabel: entry.manualFileLabel,
    },
  };
}
