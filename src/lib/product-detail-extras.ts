/** Extra copy/specs for product detail UI (per product id). */

export type SpecCell = { label: string; value: string };

export type ProductDetailExtra = {
  sku: string;
  /** 3×3 grid order (9 items) */
  grid: SpecCell[];
  /** Key/value list (same data, list layout) */
  list: SpecCell[];
  /** Long marketing paragraph under tabs */
  longIntro: string;
  manualFileLabel: string;
};

const tvIntro =
  "Experience vivid entertainment with HYUNDAI smart display technology. Stream your favorite apps, enjoy immersive sound, and control everything with an interface designed to be fast, simple, and reliable for everyday use.";

const acIntro =
  "Stay comfortable year-round with HYUNDAI inverter climate solutions. Efficient cooling, quieter operation, and durable components engineered for dependable performance in real homes and offices.";

export const productDetailExtras: Record<string, ProductDetailExtra> = {
  "tv-55-4k-uhd": {
    sku: "HY-55QATV-BK",
    grid: [
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
    list: [
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
    longIntro: tvIntro,
    manualFileLabel: "Download PDF (2.4 MB)",
  },
  "tv-50-4k-uhd": {
    sku: "HY-50QATV-BK",
    grid: [
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
    list: [
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
    longIntro: tvIntro,
    manualFileLabel: "Download PDF (2.1 MB)",
  },
  "tv-43-full-hd": {
    sku: "HY-43GATV-BK",
    grid: [
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
    list: [
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
    longIntro: tvIntro,
    manualFileLabel: "Download PDF (2.0 MB)",
  },
  "tv-65-4k-uhd": {
    sku: "HY-65QATV-BK",
    grid: [
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
    list: [
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
    longIntro: tvIntro,
    manualFileLabel: "Download PDF (2.8 MB)",
  },
  "tv-32-hd": {
    sku: "HY-32GATV-BK",
    grid: [
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
    list: [
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
    longIntro: tvIntro,
    manualFileLabel: "Download PDF (1.6 MB)",
  },
  "ac-1-5-ton-inverter": {
    sku: "HY-AC15INV-BK",
    grid: [
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
    list: [
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
    longIntro: acIntro,
    manualFileLabel: "Download PDF (1.9 MB)",
  },
  "ac-1-ton-inverter": {
    sku: "HY-AC10INV-BK",
    grid: [
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
    list: [
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
    longIntro: acIntro,
    manualFileLabel: "Download PDF (1.7 MB)",
  },
  "ac-2-ton-inverter": {
    sku: "HY-AC20INV-BK",
    grid: [
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
    list: [
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
    longIntro: acIntro,
    manualFileLabel: "Download PDF (2.2 MB)",
  },
};

export function getProductDetailExtra(productId: string): ProductDetailExtra {
  return (
    productDetailExtras[productId] ?? {
      sku: "HY-DEMO-001",
      grid: [
        { label: "Brand", value: "HYUNDAI" },
        { label: "Category", value: "Electronics" },
        { label: "Model", value: productId.toUpperCase() },
        { label: "Warranty", value: "1 Year" },
        { label: "Support", value: "Authorized service" },
        { label: "Region", value: "Global demo" },
        { label: "Dimensions", value: "—" },
        { label: "Weight", value: "—" },
        { label: "Package", value: "Standard retail box" },
      ],
      list: [
        { label: "Brand", value: "HYUNDAI" },
        { label: "Category", value: "Electronics" },
        { label: "Model", value: productId.toUpperCase() },
        { label: "Warranty", value: "1 Year" },
        { label: "Support", value: "Authorized service" },
        { label: "Region", value: "Global demo" },
        { label: "Dimensions", value: "—" },
        { label: "Weight", value: "—" },
        { label: "Package", value: "Standard retail box" },
      ],
      longIntro:
        "HYUNDAI Electronics products are engineered for dependable everyday performance. Refer to the manual for installation guidance and safety information.",
      manualFileLabel: "Download PDF (1.0 MB)",
    }
  );
}
