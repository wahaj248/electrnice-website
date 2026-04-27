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

const EN: Record<string, LocalizedProductDetail> = {
  "tv-32-hd": {
    name: 'Smart TV HYUNDAI 32" HD Google Android TV Black',
    shortDescription:
      "Enjoy the best image quality with the HYLED-32HD7A model.",
    description:
      "The Hyundai HYLED-32HD7A TV combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    sku: "HYLED-32HD7A",
    longIntro:
      "The Hyundai HYLED-32HD7A TV combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    manualFileLabel: "Download PDF (1.6 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Model", value: "HYLED-32HD7A" },
      { label: "Screen size", value: '32"' },
      { label: "Resolution", value: "HD" },
      { label: "Operating system", value: "Android R" },
      { label: "Wi‑Fi", value: "Yes" },
      { label: "Dimensions (with stand)", value: "800 × 520 × 128 mm" },
      { label: "Weight (net / gross)", value: "3500 g / 4950 g" },
      { label: "Warranty", value: "1 year" },
      { label: "Color", value: "BLACK" },
      { label: "Speakers", value: "Integrated speaker" },
      { label: "Voice control", value: "No" },
    ],
  },
  "tv-43-full-hd": {
    name: 'Smart TV HYUNDAI 43" Full HD Google Android TV Black',
    shortDescription:
      "Enjoy the best image quality with the HYLED-43FHD7A model.",
    description:
      "The Hyundai HYLED-43FHD7A combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    sku: "HYLED-43FHD7A",
    longIntro:
      "The Hyundai HYLED-43FHD7A combines advanced technology with stunning resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    manualFileLabel: "Download PDF (2.0 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Model", value: "HYLED-43FHD7A" },
      { label: "Screen size", value: '43"' },
      { label: "Resolution", value: "Full HD 1920 × 1080" },
      { label: "Operating system", value: "Android R" },
      { label: "Wi‑Fi", value: "Yes" },
      { label: "HDMI", value: "As marked on unit" },
      { label: "USB", value: "As marked on unit" },
      { label: "Dimensions (approx.)", value: "970 × 565 × 74 mm" },
      { label: "Audio", value: "Dolby Digital Plus 8W × 2" },
      { label: "Color", value: "BLACK" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "tv-50-4k-uhd": {
    name: 'Smart TV HYUNDAI 50" UHD 4K Google Android TV Black',
    shortDescription:
      "Enjoy the best image quality with the HYLED-50UHD7A model.",
    description:
      "The Hyundai HYLED-50UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    sku: "HYLED-50UHD7A",
    longIntro:
      "The Hyundai HYLED-50UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    manualFileLabel: "Download PDF (2.1 MB)",
    specs: [
      { label: "Brand", value: "HYUNDAI" },
      { label: "Model", value: "HYLED-50UHD7A" },
      { label: "Screen size", value: '50"' },
      { label: "Resolution", value: "4K UHD 3840 × 2160" },
      { label: "Operating system", value: "Android R" },
      { label: "Wi‑Fi", value: "Yes" },
      { label: "HDMI", value: "As marked on unit" },
      { label: "USB", value: "As marked on unit" },
      { label: "Dimensions (approx.)", value: "1120 × 650 × 76 mm" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
      { label: "Color", value: "BLACK" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "tv-58-4k-uhd": {
    name: 'Smart TV HYUNDAI 58" UHD 4K Google Android TV Black',
    shortDescription:
      "Enjoy the best image quality with the HYLED-58UHD7A model.",
    description:
      "The Hyundai HYLED-58UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    sku: "HYLED-58UHD7A",
    longIntro:
      "The Hyundai HYLED-58UHD7A combines advanced technology with stunning 4K UHD resolution so you can enjoy every detail. Perfect for your home, it features Wi‑Fi connectivity, an Android operating system, and excellent color reproduction for an immersive viewing experience.",
    manualFileLabel: "Download PDF (2.3 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HYLED-58UHD7A" },
      { label: "Screen size", value: '58"' },
      { label: "Resolution", value: "3840 × 2160 (4K UHD)" },
      { label: "Operating system", value: "Android R" },
      { label: "Wi‑Fi", value: "Yes" },
      { label: "HDMI", value: "3 ports" },
      { label: "USB", value: "2 ports" },
      { label: "Dimensions (approx., with stand)", value: "1295 × 750 × 80 mm" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
      { label: "Color", value: "BLACK" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-1-5-ton-inverter": {
    name: "HYUNDAI Inverter 3224 Air Conditioner Cooling/Heating White",
    shortDescription:
      "The perfect ally for your comfort. Inverter technology with 3224 kilocalories per hour for superior performance and unmatched energy savings.",
    description:
      "Discover uninterrupted comfort with the HYUNDAI Inverter air conditioner at 3224 kilocalories per hour. Its advanced Inverter technology adjusts energy use to your temperature needs, delivering optimal performance and a significant reduction in electricity use. Ideal for small or medium spaces, it offers cooling in summer and heating in winter with quiet, stable operation — in a modern white design made to blend into your home.",
    sku: "HY10INV-3200FC",
    longIntro:
      "Discover uninterrupted comfort with the HYUNDAI Inverter air conditioner at 3224 kilocalories per hour. Its advanced Inverter technology adjusts energy use to your temperature needs, delivering optimal performance and a significant reduction in electricity use. Ideal for small or medium spaces, it offers cooling in summer and heating in winter with quiet, stable operation — in a modern white design made to blend into your home.",
    manualFileLabel: "Download PDF (1.9 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY10INV-3200FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "3224 W · 2772.64 kcal/h" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A+" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "818 × 325 × 520 mm" },
      { label: "Indoor unit (W×H×D)", value: "777 × 250 × 201 mm" },
      { label: "Outdoor / indoor weight", value: "8.0 kg / 10.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "52 dB / 33–39 dB" },
      { label: "Nominal heat power", value: "940 W (max 1350 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-3224-on-off": {
    name: "HYUNDAI On-Off 3224 Air Conditioner Cooling/Heating White",
    shortDescription:
      "Ideal for medium-sized rooms, this 3224 W On-Off air conditioner delivers the right temperature with dependable, easy-to-understand operation — power and practicality in balance.",
    description:
      "Enjoy reliable comfort with the HYUNDAI On-Off air conditioner at 3224 W. Strong cooling and heating output suits medium-sized rooms, with simple controls for efficient temperature changes and a compact white design that blends into your space.",
    sku: "HY9-3200FC",
    longIntro:
      "Enjoy the perfect climate in your home with the HYUNDAI On-Off 3224 W air conditioner. This unit offers excellent cooling and heating capacity, ideal for maintaining comfort in medium-sized rooms. Its simple and reliable operation allows you to control the temperature efficiently, while its compact and modern white design fits seamlessly into any space. Furthermore, its On-Off technology keeps energy use predictable when the compressor cycles for cooling and heating duty.",
    manualFileLabel: "Download PDF (1.9 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY9-3200FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "3224 W · 2772.64 kcal/h" },
      { label: "Technology", value: "On-Off" },
      { label: "Energy efficiency", value: "A" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "818 × 325 × 520 mm" },
      { label: "Indoor unit (W×H×D)", value: "777 × 250 × 201 mm" },
      { label: "Outdoor / indoor weight", value: "20.0 kg / 10.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "52 dB / 33–42 dB" },
      { label: "Nominal heat power", value: "998 W (max 1298 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-5275-on-off": {
    name: "HYUNDAI On-Off 5275 Air Conditioner Cooling/Heating White",
    shortDescription:
      "For spaces that need more, this 5275 W On-Off air conditioner delivers optimal cooling and heating. Straightforward On-Off control and a refined white finish bring the comfort your home deserves.",
    description:
      "For larger rooms that need extra capacity, the HYUNDAI On-Off air conditioner at 5275 W pairs efficient cooling and heating with simple, effective temperature control — in a durable white design built for daily use.",
    sku: "HY9-5000FC",
    longIntro:
      "For spaces requiring greater cooling capacity, the HYUNDAI On-Off air conditioner with 5275 W is the perfect choice. With an efficient heating and cooling system, this unit helps maintain a comfortable environment year-round. Its On-Off technology allows for simple and effective temperature control, while its robust and stylish white design ensures durability and elegance in any setting. Ideal for those seeking powerful performance without compromising on style.",
    manualFileLabel: "Download PDF (2.2 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY9-5000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "5275 W · 4536.5 kcal/h" },
      { label: "Technology", value: "On-Off" },
      { label: "Energy efficiency", value: "A" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "910 × 294 × 206 mm" },
      { label: "Outdoor / indoor weight", value: "25.0 kg / 13.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "56 dB / 41–50 dB" },
      { label: "Nominal heat power", value: "1525 W (max 1983 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-6540-on-off": {
    name: "HYUNDAI On-Off 6540 Air Conditioner Cooling/Heating White",
    shortDescription:
      "Enjoy perfect comfort year-round with this powerful 6540 W On-Off air conditioner — ideal for cooling in summer and heating in winter, finished in a refined white style.",
    description:
      "The HYUNDAI On-Off air conditioner at 6540 W brings high capacity for demanding rooms. On-Off operation keeps climate control clear and predictable, with a white cabinet designed to sit quietly in your space while it works.",
    sku: "HY8-6000FC",
    longIntro:
      "The HYUNDAI On-Off air conditioner with 6540 W offers powerful performance to keep your home comfortable year-round. With its On-Off technology, this unit ensures straightforward temperature control, ideal for cooling on hot days and heating in winter. Its elegant white design blends seamlessly into any décor. Furthermore, it features an energy-conscious approach to operation, helping you save without sacrificing comfort.",
    manualFileLabel: "Download PDF (2.5 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY8-6000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "6540 W · 5624.4 kcal/h" },
      { label: "Technology", value: "On-Off" },
      { label: "Energy efficiency", value: "A" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "820 × 300 × 605 mm" },
      { label: "Indoor unit (W×H×D)", value: "1010 × 315 × 220 mm" },
      { label: "Outdoor / indoor weight", value: "13.0 kg / 16.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "58 dB / 43–51 dB" },
      { label: "Nominal heat power", value: "1861 W (max 2140 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-1-ton-inverter": {
    name: "HYUNDAI Inverter 3200 Air Conditioner Cooling/Heating White",
    shortDescription:
      "Comfort in every corner of your home. With 3200 BTU, this inverter unit provides the perfect climate while saving you money.",
    description:
      "Small but powerful. The HYUNDAI Inverter air conditioner with 3200 BTU/h delivers superior performance in a compact format, ideal for small to medium-sized rooms. Thanks to Inverter technology, this unit automatically adjusts energy consumption, allowing you to enjoy significant savings without sacrificing comfort. Cool in summer, warm in winter, and energy efficiency that cares for both your home and the environment.",
    sku: "HY11INV-3200FC",
    longIntro:
      "Small but powerful. The HYUNDAI Inverter air conditioner with 3200 BTU/h delivers superior performance in a compact format, ideal for small to medium-sized rooms. Thanks to Inverter technology, this unit automatically adjusts energy consumption, allowing you to enjoy significant savings without sacrificing comfort. Cool in summer, warm in winter, and energy efficiency that cares for both your home and the environment.",
    manualFileLabel: "Download PDF (1.7 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-3200FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "3200 W (2752 BTU/h)" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "765 × 310 × 481 mm" },
      { label: "Indoor unit (W×H×D)", value: "777 × 250 × 201 mm" },
      { label: "Outdoor / indoor weight", value: "7.5 kg / 10.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "53 dB / 33–39 dB" },
      { label: "Nominal heat power", value: "975 W (max 1400 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-2-ton-inverter": {
    name: "HYUNDAI Inverter 5000 Air Conditioner Cooling/Heating White",
    shortDescription:
      "Power and efficiency in one Inverter air conditioner at 5000 kilocalories per hour. Keep large spaces at the ideal temperature while cutting energy use.",
    description:
      "If you need a powerful, efficient air conditioner, the HYUNDAI Inverter at 5000 kilocalories per hour is the right choice. Built for large rooms, it delivers precise, steady comfort all year. Inverter technology optimizes energy use and helps extend the life of the unit — comfortable on hot days and cold days alike, in a reliable, modern, lower-impact package.",
    sku: "HY10INV-5000FC",
    longIntro:
      "If you need a powerful, efficient air conditioner, the HYUNDAI Inverter at 5000 kilocalories per hour is the right choice. Built for large rooms, it delivers precise, steady comfort all year. Inverter technology optimizes energy use and helps extend the life of the unit — comfortable on hot days and cold days alike, in a reliable, modern, lower-impact package.",
    manualFileLabel: "Download PDF (2.2 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY10INV-5000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "5000 W · 4300 kcal/h" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "910 × 294 × 206 mm" },
      { label: "Outdoor / indoor weight", value: "35.0 kg / 10.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "56 dB / 39–45 dB" },
      { label: "Nominal heat power", value: "1588 W (max 2550 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-5000-hy11": {
    name: "HYUNDAI Inverter 5000 Air Conditioner Cooling/Heating White — HY11INV-5000FC",
    shortDescription:
      "The perfect balance of power and savings: 5000 kilocalories per hour with Inverter technology keeps large spaces at the ideal temperature year-round — sophisticated white.",
    description:
      "The HYUNDAI Inverter at 5000 kilocalories per hour combines next-generation efficiency with real comfort for large rooms. It adapts output to your heating and cooling needs while trimming energy use, offers cold in summer and heat in winter, and pairs a clean white look with dependable inverter performance.",
    sku: "HY11INV-5000FC",
    longIntro:
      "The HYUNDAI Inverter at 5000 kilocalories per hour combines next-generation efficiency with real comfort for large rooms. It adapts output to your heating and cooling needs while trimming energy use, offers cold in summer and heat in winter, and pairs a clean white design with dependable inverter performance and R32 refrigerant.",
    manualFileLabel: "Download PDF (2.2 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-5000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "5000 W · 4300 kcal/h" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "910 × 294 × 206 mm" },
      { label: "Outdoor / indoor weight", value: "33.0 kg / 13.5 kg" },
      { label: "Noise (outdoor / indoor)", value: "55 dB / 32–44 dB" },
      { label: "Nominal heat power", value: "1460 W (max 2500 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-5000-wifi": {
    name: "HYUNDAI Inverter WIFI 5000 Cooling/Heating Air Conditioner White",
    shortDescription:
      "Efficiency and convenience in one unit. The HYUNDAI Inverter HY11INV-5000FCW offers powerful cooling with low energy consumption thanks to Inverter technology, and Wi‑Fi lets you control it remotely from your smartphone for the perfect temperature every time.",
    description:
      "The HYUNDAI Inverter HY11INV-5000FCW is built for large-room comfort with less waste: Inverter control matches output to demand, while Wi‑Fi adds scheduling and remote adjustments from your phone — plus filtration support for cleaner indoor air.",
    sku: "HY11INV-5000FCW",
    longIntro:
      "The HYUNDAI Inverter HY11INV-5000FCW air conditioner is synonymous with comfort and innovation. Its Inverter technology allows for more efficient operation, adjusting power according to the desired temperature and preventing energy consumption spikes. This not only optimizes the unit's performance but also extends its lifespan. This model features Wi‑Fi connectivity so you can control it from anywhere with your smartphone, scheduling it to turn on and off according to your needs. It also has an air filtration system that helps eliminate impurities and improves the air quality in your home. With its sleek and quiet design, the HY11INV-5000FCW is ideal for those looking for a powerful, efficient, and easy-to-use air conditioner.",
    manualFileLabel: "Download PDF (2.2 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-5000FCW" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "5000 W · 4300 kcal/h" },
      { label: "Technology", value: "Inverter · Wi‑Fi" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "910 × 294 × 206 mm" },
      { label: "Outdoor / indoor weight", value: "27.0 kg / 13.5 kg" },
      { label: "Noise (outdoor / indoor)", value: "55 dB / 32–44 dB" },
      { label: "Nominal heat power", value: "1460 W (max 2500 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-6400-inverter": {
    name: "HYUNDAI Inverter 6400 Air Conditioner Cooling/Heating White",
    shortDescription:
      "Maximum capacity, minimum consumption. At 6400 W, this inverter air conditioner ensures total comfort in demanding rooms while optimizing energy use — style and superior performance for your home.",
    description:
      "Maximum power and efficiency in a single unit. The HYUNDAI Inverter air conditioner at 6400 W is built for large spaces that need precise, steady climate control. Inverter technology tailors output to hold the perfect temperature in cooling and heating modes, with a refined white finish for modern homes.",
    sku: "HY10INV-6000FC",
    longIntro:
      "Maximum power and efficiency in a single unit. The HYUNDAI Inverter air conditioner at 6400 W is the ultimate solution for those seeking superior performance. With Inverter technology, it automatically adjusts energy consumption to maintain the perfect temperature in both cooling and heating modes. This model is ideal for large spaces requiring precise, constant temperature control — and its sophisticated white design adds distinction to any room.",
    manualFileLabel: "Download PDF (2.5 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY10INV-6000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "6400 W · 5504 kcal/h" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R410A" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "1010 × 315 × 220 mm" },
      { label: "Outdoor / indoor weight", value: "33.0 kg / 16.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "56 dB / 44–50 dB" },
      { label: "Nominal heat power", value: "1874 W (max 2600 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-6400-hy11": {
    name: "HYUNDAI Inverter 6400 Air Conditioner Cooling/Heating White — HY11INV-6000FC",
    shortDescription:
      "For those who demand the best. This 6400 W inverter air conditioner keeps the ideal climate at all times, with a modern design and efficient energy consumption. An indispensable ally for your home!",
    description:
      "Designed for large spaces, the HYUNDAI Inverter air conditioner at 6400 W delivers optimal climate control whenever you need it. Inverter technology regulates energy use to match conditions for consistent, efficient performance — with quiet operation and a minimalist white design suited to homes and workplaces.",
    sku: "HY11INV-6000FC",
    longIntro:
      "Designed for large spaces, the HYUNDAI Inverter air conditioner at 6400 W guarantees optimal climate control at all times. Its Inverter technology regulates energy consumption according to temperature conditions, offering consistent and efficient performance. Quiet operation and a minimalist white design make it an excellent choice for both homes and workplaces that require a comfortable, controlled environment.",
    manualFileLabel: "Download PDF (2.5 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-6000FC" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "6400 W · 5504 kcal/h" },
      { label: "Technology", value: "Inverter" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "1010 × 315 × 220 mm" },
      { label: "Outdoor / indoor weight", value: "33.0 kg / 16.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "55 dB / 32–47 dB" },
      { label: "Nominal heat power", value: "1959 W (max 2600 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-6000-wifi": {
    name: "HYUNDAI Inverter WIFI 6000 Cooling/Heating Air Conditioner White",
    shortDescription:
      "Experience ultimate comfort with the HYUNDAI Inverter HY11INV-6000FCW air conditioner. Its Inverter technology optimizes energy consumption so you can save on electricity while holding the ideal temperature, and integrated Wi‑Fi lets you control it from your smartphone anytime, anywhere.",
    description:
      "The HYUNDAI Inverter HY11INV-6000FCW blends technology, efficiency, and comfort for large spaces. Inverter control adapts compressor output to demand, Wi‑Fi adds full remote operation from your phone, and filtration support helps improve indoor air — in a sleek white design for home or office.",
    sku: "HY11INV-6000FCW",
    longIntro:
      "The HYUNDAI Inverter HY11INV-6000FCW air conditioner is the perfect combination of technology, efficiency, and comfort. Designed for optimal performance, its Inverter system automatically adjusts the compressor speed, reducing energy consumption by up to 40% compared to traditional units. Thanks to its integrated Wi‑Fi connectivity, you can control all its functions from your smartphone, ensuring the ideal temperature is set before you even get home. It also features an advanced filtration system that improves air quality by eliminating dust particles and allergens. Its modern and elegant design complements any environment, adding a sophisticated touch to your home or office. With the HYUNDAI HY11INV-6000FCW, enjoy a perfect climate all year round with the best climate control technology.",
    manualFileLabel: "Download PDF (2.5 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-6000FCW" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "6400 W · 5504 kcal/h" },
      { label: "Technology", value: "Inverter · Wi‑Fi" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "853 × 349 × 602 mm" },
      { label: "Indoor unit (W×H×D)", value: "1010 × 315 × 220 mm" },
      { label: "Outdoor / indoor weight", value: "32.0 kg / 13.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "55 dB / 32–47 dB" },
      { label: "Nominal heat power", value: "1959 W (max 2600 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  "ac-3200-wifi": {
    name: "HYUNDAI Inverter WIFI 3200 Cooling/Heating Air Conditioner White",
    shortDescription:
      "The HYUNDAI Inverter HY11INV-3200FCW combines optimal performance with energy savings, thanks to its inverter system. Wi‑Fi connectivity lets you control it from your smartphone and program the perfect temperature from anywhere.",
    description:
      "If you are looking for an efficient, high-tech air conditioner, the HYUNDAI Inverter HY11INV-3200FCW is the ideal choice. Inverter technology steadies the temperature while cutting energy waste, and Wi‑Fi puts scheduling and comfort in your pocket — with quiet operation and a clean white look.",
    sku: "HY11INV-3200FCW",
    longIntro:
      "If you are looking for an efficient, high-tech air conditioner, the HYUNDAI Inverter HY11INV-3200FCW is the ideal choice. Its Inverter technology automatically adjusts compressor speed to maintain a stable temperature, reducing energy consumption and eliminating sudden temperature fluctuations. With built-in Wi‑Fi connectivity, you can turn your unit on and off and adjust its temperature from your phone, ensuring maximum comfort even when you are not home. In addition, its filtration system improves air quality by removing dust, allergens, and other contaminants. This model stands out for its quiet operation and modern design that complements any environment. Enjoy efficient, connected climate control with the HYUNDAI HY11INV-3200FCW.",
    manualFileLabel: "Download PDF (1.8 MB)",
    specs: [
      { label: "Brand", value: "Hyundai Electronics" },
      { label: "Model", value: "HY11INV-3200FCW" },
      { label: "Color", value: "White" },
      { label: "Operating modes", value: "Cooling / Heating" },
      { label: "Cooling capacity", value: "3200 W · 2752 kcal/h" },
      { label: "Technology", value: "Inverter · Wi‑Fi" },
      { label: "Energy efficiency", value: "A++" },
      { label: "Voltage", value: "220V" },
      { label: "Refrigerant", value: "R32" },
      { label: "Outdoor unit (W×D×H)", value: "795 × 305 × 549 mm" },
      { label: "Indoor unit (W×H×D)", value: "979 × 372 × 277 mm" },
      { label: "Outdoor / indoor weight", value: "23.0 kg / 10.0 kg" },
      { label: "Noise (outdoor / indoor)", value: "55 dB / 32–44 dB" },
      { label: "Nominal heat power", value: "1460 W (max 2500 W)" },
      { label: "Warranty", value: "1 year" },
    ],
  },
};

const ES: Record<string, LocalizedProductDetail> = {
  "tv-32-hd": {
    name: 'Smart TV HYUNDAI 32" HD Google Android TV Negro',
    shortDescription:
      "Disfrutá de la mejor calidad de imagen con el modelo HYLED-32HD7A.",
    description:
      "El televisor Hyundai HYLED-32HD7A combina tecnología avanzada con una resolución impresionante para que disfrutes cada detalle. Ideal para tu hogar: conectividad Wi‑Fi, sistema operativo Android y excelente reproducción de color para una experiencia envolvente.",
    sku: "HYLED-32HD7A",
    longIntro:
      "El televisor Hyundai HYLED-32HD7A combina tecnología avanzada con una resolución impresionante para que disfrutes cada detalle. Ideal para tu hogar: conectividad Wi‑Fi, sistema operativo Android y excelente reproducción de color para una experiencia envolvente.",
    manualFileLabel: "Descargar PDF (1,6 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Modelo", value: "HYLED-32HD7A" },
      { label: "Tamaño de pantalla", value: '32"' },
      { label: "Resolución", value: "HD" },
      { label: "Sistema operativo", value: "Android R" },
      { label: "Wi‑Fi", value: "Sí" },
      { label: "Dimensiones (con base)", value: "800 × 520 × 128 mm" },
      { label: "Peso (neto / bruto)", value: "3500 g / 4950 g" },
      { label: "Garantía", value: "1 año" },
      { label: "Color", value: "NEGRO" },
      { label: "Altavoces", value: "Altavoz integrado" },
      { label: "Control por voz", value: "No" },
    ],
  },
  "tv-43-full-hd": {
    name: 'Smart TV HYUNDAI 43" Full HD Google Android TV Negro',
    shortDescription:
      "Disfrutá de la mejor calidad de imagen con el modelo HYLED-43FHD7A.",
    description:
      "El televisor Hyundai HYLED-43FHD7A combina tecnología avanzada con una resolución impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    sku: "HYLED-43FHD7A",
    longIntro:
      "El televisor Hyundai HYLED-43FHD7A combina tecnología avanzada con una resolución impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    manualFileLabel: "Descargar PDF (2,0 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Modelo", value: "HYLED-43FHD7A" },
      { label: "Tamaño de pantalla", value: '43"' },
      { label: "Resolución", value: "Full HD 1920 × 1080" },
      { label: "Sistema operativo", value: "Android R" },
      { label: "Wi‑Fi", value: "Sí" },
      { label: "HDMI", value: "Según etiqueta del equipo" },
      { label: "USB", value: "Según etiqueta del equipo" },
      { label: "Dimensiones (aprox.)", value: "970 × 565 × 74 mm" },
      { label: "Audio", value: "Dolby Digital Plus 8W × 2" },
      { label: "Color", value: "NEGRO" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "tv-50-4k-uhd": {
    name: 'Smart TV HYUNDAI 50" UHD 4K Google Android TV Negro',
    shortDescription:
      "Disfrutá de la mejor calidad de imagen con el modelo HYLED-50UHD7A.",
    description:
      "El televisor Hyundai HYLED-50UHD7A combina tecnología avanzada con una resolución 4K UHD impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    sku: "HYLED-50UHD7A",
    longIntro:
      "El televisor Hyundai HYLED-50UHD7A combina tecnología avanzada con una resolución 4K UHD impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    manualFileLabel: "Descargar PDF (2,1 MB)",
    specs: [
      { label: "Marca", value: "HYUNDAI" },
      { label: "Modelo", value: "HYLED-50UHD7A" },
      { label: "Tamaño de pantalla", value: '50"' },
      { label: "Resolución", value: "4K UHD 3840 × 2160" },
      { label: "Sistema operativo", value: "Android R" },
      { label: "Wi‑Fi", value: "Sí" },
      { label: "HDMI", value: "Según etiqueta del equipo" },
      { label: "USB", value: "Según etiqueta del equipo" },
      { label: "Dimensiones (aprox.)", value: "1120 × 650 × 76 mm" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
      { label: "Color", value: "NEGRO" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "tv-58-4k-uhd": {
    name: 'Smart TV HYUNDAI 58" UHD 4K Google Android TV Negro',
    shortDescription:
      "Disfrutá de la mejor calidad de imagen con el modelo HYLED-58UHD7A.",
    description:
      "El televisor Hyundai HYLED-58UHD7A combina tecnología avanzada con una resolución 4K UHD impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    sku: "HYLED-58UHD7A",
    longIntro:
      "El televisor Hyundai HYLED-58UHD7A combina tecnología avanzada con una resolución 4K UHD impresionante para que disfrutes de cada detalle. Perfecto para tu hogar, cuenta con conexión Wifi, sistema operativo Android, y una excelente relación de colores para una experiencia de visualización envolvente.",
    manualFileLabel: "Descargar PDF (2,3 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HYLED-58UHD7A" },
      { label: "Tamaño de pantalla", value: '58"' },
      { label: "Resolución", value: "3840 × 2160 (4K UHD)" },
      { label: "Sistema operativo", value: "Android R" },
      { label: "Wi‑Fi", value: "Sí" },
      { label: "HDMI", value: "3 puertos" },
      { label: "USB", value: "2 puertos" },
      { label: "Dimensiones (aprox., con base)", value: "1295 × 750 × 80 mm" },
      { label: "Audio", value: "Dolby Digital Plus 10W × 2" },
      { label: "Color", value: "NEGRO" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-1-5-ton-inverter": {
    name: "Acondicionador de aire HYUNDAI Inverter 3224 Frío/Calor Blanco",
    shortDescription:
      "El aliado perfecto para tu confort. Tecnología Inverter con 3224 frigorías para un rendimiento superior y un ahorro energético sin igual.",
    description:
      "Descubrí el confort sin interrupciones con el aire acondicionado HYUNDAI Inverter de 3224 frigorías. Su avanzada tecnología Inverter ajusta el consumo energético a las necesidades de temperatura, ofreciendo un rendimiento óptimo y una significativa reducción en el gasto eléctrico. Ideal para ambientes pequeños o medianos, este equipo te brinda frío en verano y calor en invierno con un funcionamiento silencioso y estable. Todo esto en un diseño moderno y elegante en color blanco, pensado para integrarse perfectamente en tu hogar.",
    sku: "HY10INV-3200FC",
    longIntro:
      "Descubrí el confort sin interrupciones con el aire acondicionado HYUNDAI Inverter de 3224 frigorías. Su avanzada tecnología Inverter ajusta el consumo energético a las necesidades de temperatura, ofreciendo un rendimiento óptimo y una significativa reducción en el gasto eléctrico. Ideal para ambientes pequeños o medianos, este equipo te brinda frío en verano y calor en invierno con un funcionamiento silencioso y estable. Todo esto en un diseño moderno y elegante en color blanco, pensado para integrarse perfectamente en tu hogar.",
    manualFileLabel: "Descargar PDF (1,9 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY10INV-3200FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "3224 W · 2772,64 frigorías" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A+" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "818 × 325 × 520 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "777 × 250 × 201 mm" },
      { label: "Peso ext. / int.", value: "8,0 kg / 10,0 kg" },
      { label: "Ruido ext. / int.", value: "52 dB / 33–39 dB" },
      { label: "Potencia nominal calor", value: "940 W (máx. 1350 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-3224-on-off": {
    name: "Aire acondicionado HYUNDAI On-Off 3224 Frío/Calor Blanco",
    shortDescription:
      "Ideal para ambientes medianos: este aire On-Off de 3224 W mantiene la temperatura ideal con un funcionamiento simple y confiable. Equilibrio entre potencia y practicidad.",
    description:
      "Disfrutá del clima perfecto con el aire acondicionado HYUNDAI On-Off de 3224 W. Ofrece buena capacidad de frío y calor para habitaciones medianas, con operación clara y un diseño blanco compacto que se integra en cualquier espacio.",
    sku: "HY9-3200FC",
    longIntro:
      "Disfrutá del clima ideal en tu hogar con el aire acondicionado HYUNDAI On-Off de 3224 W. Este equipo ofrece una excelente capacidad de enfriamiento y calefacción para mantener el confort en ambientes medianos. Su funcionamiento simple y confiable permite regular la temperatura con eficiencia, y su diseño blanco moderno y compacto se adapta a cualquier rincón. La tecnología On-Off brinda un uso energético claro cuando el compresor trabaja en ciclos de frío y calor.",
    manualFileLabel: "Descargar PDF (1,9 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY9-3200FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "3224 W · 2772,64 frigorías" },
      { label: "Tecnología", value: "On-Off" },
      { label: "Eficiencia energética", value: "A" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "818 × 325 × 520 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "777 × 250 × 201 mm" },
      { label: "Peso ext. / int.", value: "20,0 kg / 10,0 kg" },
      { label: "Ruido ext. / int.", value: "52 dB / 33/36/42 dB" },
      { label: "Potencia nominal calor", value: "998 W (máx. 1298 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-5275-on-off": {
    name: "Aire acondicionado HYUNDAI On-Off 5275 Frío/Calor Blanco",
    shortDescription:
      "Para espacios que piden más: este aire On-Off de 5275 W ofrece un rendimiento óptimo de frío y calor. Tecnología On-Off y diseño blanco robusto para el confort que tu hogar merece.",
    description:
      "Cuando necesitás más capacidad, el aire acondicionado HYUNDAI On-Off de 5275 W combina un sistema eficiente de frío y calor con un control de temperatura simple y efectivo, en un diseño blanco elegante y resistente.",
    sku: "HY9-5000FC",
    longIntro:
      "Para ambientes que requieren mayor capacidad de enfriamiento, el aire acondicionado HYUNDAI On-Off de 5275 W es una excelente opción. Con un sistema eficiente de calefacción y refrigeración, ayuda a mantener el confort durante todo el año. Su tecnología On-Off permite un control de temperatura simple y efectivo, y su diseño blanco robusto y estilizado aporta durabilidad y buena presencia en cualquier espacio. Ideal para quienes buscan potencia sin renunciar al estilo.",
    manualFileLabel: "Descargar PDF (2,2 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY9-5000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "5275 W · 4536,5 frigorías" },
      { label: "Tecnología", value: "On-Off" },
      { label: "Eficiencia energética", value: "A" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "910 × 294 × 206 mm" },
      { label: "Peso ext. / int.", value: "25,0 kg / 13,0 kg" },
      { label: "Ruido ext. / int.", value: "56 dB / 41/44/50 dB" },
      { label: "Potencia nominal calor", value: "1525 W (máx. 1983 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-6540-on-off": {
    name: "Aire acondicionado HYUNDAI On-Off 6540 Frío/Calor Blanco",
    shortDescription:
      "Confort durante todo el año con este potente aire On-Off de 6540 W: fresco en verano, cálido en invierno, con un elegante acabado blanco.",
    description:
      "El aire acondicionado HYUNDAI On-Off de 6540 W ofrece alto rendimiento para hogares exigentes. Control On-Off claro para frío y calor, y diseño blanco que se integra al ambiente.",
    sku: "HY8-6000FC",
    longIntro:
      "El aire acondicionado HYUNDAI On-Off de 6540 W ofrece un rendimiento potente para mantener tu hogar confortable durante todo el año. Con tecnología On-Off, permite un control de temperatura directo, ideal para refrescar en los días de calor y climatizar en invierno. Su diseño blanco elegante combina con distintos estilos de decoración. Además, su enfoque eficiente en el uso de energía ayuda a cuidar el consumo sin renunciar al confort.",
    manualFileLabel: "Descargar PDF (2,5 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY8-6000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "6540 W · 5624,4 frigorías" },
      { label: "Tecnología", value: "On-Off" },
      { label: "Eficiencia energética", value: "A" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "820 × 300 × 605 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "1010 × 315 × 220 mm" },
      { label: "Peso ext. / int.", value: "13,0 kg / 16,0 kg" },
      { label: "Ruido ext. / int.", value: "58 dB / 43/45/51 dB" },
      { label: "Potencia nominal calor", value: "1861 W (máx. 2140 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-1-ton-inverter": {
    name: "Aire acondicionado HYUNDAI Inverter 3200 Frío/Calor Blanco",
    shortDescription:
      "Confort en cada rincón de tu hogar. Con 3200 BTU, este equipo inverter ofrece el clima ideal y ahorro en consumo.",
    description:
      "Pequeño pero potente. El aire acondicionado inverter HYUNDAI de 3200 BTU/h ofrece un rendimiento superior en formato compacto, ideal para habitaciones pequeñas y medianas. Gracias a la tecnología Inverter, ajusta automáticamente el consumo para ahorrar energía sin renunciar al confort: fresco en verano, cálido en invierno y eficiencia que cuida tu hogar y el medio ambiente.",
    sku: "HY11INV-3200FC",
    longIntro:
      "Pequeño pero potente. El aire acondicionado inverter HYUNDAI de 3200 BTU/h ofrece un rendimiento superior en formato compacto, ideal para habitaciones pequeñas y medianas. Gracias a la tecnología Inverter, ajusta automáticamente el consumo para ahorrar energía sin renunciar al confort: fresco en verano, cálido en invierno y eficiencia que cuida tu hogar y el medio ambiente.",
    manualFileLabel: "Descargar PDF (1,7 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-3200FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad de enfriamiento", value: "3200 W (2752 BTU/h)" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "765 × 310 × 481 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "777 × 250 × 201 mm" },
      { label: "Peso ext. / int.", value: "7,5 kg / 10,0 kg" },
      { label: "Ruido ext. / int.", value: "53 dB / 33–39 dB" },
      { label: "Potencia nominal calor", value: "975 W (máx. 1400 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-3200-wifi": {
    name: "Aire acondicionado HYUNDAI Inverter WIFI 3200 Frío/Calor Blanco",
    shortDescription:
      "El HYUNDAI Inverter HY11INV-3200FCW combina un rendimiento óptimo con ahorro energético gracias al sistema inverter. Su conectividad Wi‑Fi permite controlarlo desde el smartphone y programar la temperatura ideal desde cualquier lugar.",
    description:
      "Si buscás un aire acondicionado eficiente y tecnológico, el HYUNDAI Inverter HY11INV-3200FCW es la opción ideal. La tecnología Inverter mantiene la temperatura estable y reduce el consumo; el Wi‑Fi integrado te permite encenderlo, apagarlo y regularlo a distancia, con funcionamiento silencioso y diseño blanco moderno.",
    sku: "HY11INV-3200FCW",
    longIntro:
      "Si buscás un aire acondicionado eficiente y tecnológico, el HYUNDAI Inverter HY11INV-3200FCW es la opción ideal. Su tecnología Inverter ajusta automáticamente la velocidad del compresor para mantener una temperatura estable, reduciendo el consumo energético y evitando variaciones bruscas. Con Wi‑Fi integrado podés encenderlo o apagarlo y ajustar la temperatura desde el celular, con máximo confort incluso cuando no estás en casa. Además, su sistema de filtración mejora la calidad del aire al retener polvo, alérgenos y otros contaminantes. Destaca por su funcionamiento silencioso y un diseño moderno que combina con cualquier ambiente: climatización eficiente y conectada con HYUNDAI HY11INV-3200FCW.",
    manualFileLabel: "Descargar PDF (1,8 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-3200FCW" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "3200 W · 2752 frigorías" },
      { label: "Tecnología", value: "Inverter · Wi‑Fi" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "795 × 305 × 549 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "979 × 372 × 277 mm" },
      { label: "Peso ext. / int.", value: "23,0 kg / 10,0 kg" },
      { label: "Ruido ext. / int.", value: "55 dB / 32/38/44 dB" },
      { label: "Potencia nominal calor", value: "1460 W (máx. 2500 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-2-ton-inverter": {
    name: "Acondicionador de aire HYUNDAI Inverter 5000 Frío/Calor Blanco",
    shortDescription:
      "Potencia y eficiencia se combinan en este aire acondicionado Inverter de 5000 frigorías. Mantené tus espacios grandes a la temperatura ideal, reduciendo el consumo de energía.",
    description:
      "Si buscás un aire acondicionado potente y eficiente, el HYUNDAI Inverter de 5000 frigorías es la elección perfecta. Diseñado para grandes ambientes, este equipo te asegura una climatización precisa y constante durante todo el año. Su tecnología Inverter no solo optimiza el consumo energético, sino que también prolonga la vida útil del aparato. Disfrutá de una atmósfera confortable, tanto en los días de calor como en las jornadas más frías, todo con un equipo confiable, moderno y de bajo impacto ambiental.",
    sku: "HY10INV-5000FC",
    longIntro:
      "Si buscás un aire acondicionado potente y eficiente, el HYUNDAI Inverter de 5000 frigorías es la elección perfecta. Diseñado para grandes ambientes, este equipo te asegura una climatización precisa y constante durante todo el año. Su tecnología Inverter no solo optimiza el consumo energético, sino que también prolonga la vida útil del aparato. Disfrutá de una atmósfera confortable, tanto en los días de calor como en las jornadas más frías, todo con un equipo confiable, moderno y de bajo impacto ambiental.",
    manualFileLabel: "Descargar PDF (2,2 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY10INV-5000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "5000 W · 4300 frigorías" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "910 × 294 × 206 mm" },
      { label: "Peso ext. / int.", value: "35,0 kg / 10,0 kg" },
      { label: "Ruido ext. / int.", value: "56 dB / 39–45 dB" },
      { label: "Potencia nominal calor", value: "1588 W (máx. 2550 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-5000-hy11": {
    name: "Acondicionador de aire HYUNDAI Inverter 5000 Frío/Calor Blanco — HY11INV-5000FC",
    shortDescription:
      "El equilibrio perfecto entre potencia y ahorro. Con 5000 frigorías y tecnología Inverter, este aire acondicionado mantiene grandes espacios a la temperatura ideal todo el año. ¡Un toque de sofisticación en blanco!",
    description:
      "El aire acondicionado HYUNDAI Inverter de 5000 frigorías es sinónimo de eficiencia y confort. Con tecnología de última generación, este equipo adapta su funcionamiento a las necesidades de temperatura, proporcionando frío en verano y calor en invierno, todo mientras reduce el consumo energético. Su diseño elegante y moderno en color blanco complementa cualquier decoración, y su potencia lo hace ideal para ambientes grandes. ¡La solución perfecta para mantener el clima ideal en tu hogar!",
    sku: "HY11INV-5000FC",
    longIntro:
      "El aire acondicionado HYUNDAI Inverter de 5000 frigorías es sinónimo de eficiencia y confort. Con tecnología de última generación, este equipo adapta su funcionamiento a las necesidades de temperatura, proporcionando frío en verano y calor en invierno, todo mientras reduce el consumo energético. Su diseño elegante y moderno en color blanco complementa cualquier decoración, y su potencia lo hace ideal para ambientes grandes. ¡La solución perfecta para mantener el clima ideal en tu hogar!",
    manualFileLabel: "Descargar PDF (2,2 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-5000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "5000 W · 4300 frigorías" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "910 × 294 × 206 mm" },
      { label: "Peso ext. / int.", value: "33,0 kg / 13,5 kg" },
      { label: "Ruido ext. / int.", value: "55 dB / 32/38/44 dB" },
      { label: "Potencia nominal calor", value: "1460 W (máx. 2500 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-5000-wifi": {
    name: "Aire acondicionado HYUNDAI Inverter WIFI 5000 Frío/Calor Blanco",
    shortDescription:
      "Eficiencia y comodidad en un solo equipo. El HYUNDAI Inverter HY11INV-5000FCW ofrece un enfriamiento potente con bajo consumo gracias a la tecnología Inverter, y el Wi‑Fi permite controlarlo a distancia desde el smartphone para lograr la temperatura ideal en tu hogar.",
    description:
      "El HYUNDAI Inverter HY11INV-5000FCW combina confort e innovación: la tecnología Inverter adapta la potencia a la temperatura deseada para evitar picos de consumo, y el Wi‑Fi integrado permite programarlo y manejarlo desde el celular, con filtración de aire que ayuda a mejorar la calidad del ambiente.",
    sku: "HY11INV-5000FCW",
    longIntro:
      "El aire acondicionado HYUNDAI Inverter HY11INV-5000FCW es sinónimo de confort e innovación. Su tecnología Inverter permite un funcionamiento más eficiente, ajustando la potencia según la temperatura deseada y evitando picos de consumo energético, lo que optimiza el rendimiento y contribuye a alargar la vida útil del equipo. Cuenta con conectividad Wi‑Fi para controlarlo desde cualquier lugar con el smartphone, programando encendidos y apagados según tus necesidades. Además, incorpora un sistema de filtración que ayuda a eliminar impurezas y mejora la calidad del aire en tu hogar. Con un diseño elegante y silencioso, el HY11INV-5000FCW es ideal para quienes buscan un aire potente, eficiente y fácil de usar.",
    manualFileLabel: "Descargar PDF (2,2 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-5000FCW" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "5000 W · 4300 frigorías" },
      { label: "Tecnología", value: "Inverter · Wi‑Fi" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "910 × 294 × 206 mm" },
      { label: "Peso ext. / int.", value: "27,0 kg / 13,5 kg" },
      { label: "Ruido ext. / int.", value: "55 dB / 32/38/44 dB" },
      { label: "Potencia nominal calor", value: "1460 W (máx. 2500 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-6400-inverter": {
    name: "Acondicionador de aire HYUNDAI Inverter 6400 Frío/Calor Blanco",
    shortDescription:
      "Máxima capacidad, mínimo consumo. Con 6400 W, este aire inverter garantiza confort total en ambientes exigentes optimizando el uso de energía. Estilo y rendimiento superior para tu hogar.",
    description:
      "Máxima potencia y eficiencia en un solo equipo. El aire acondicionado HYUNDAI Inverter de 6400 W está pensado para grandes espacios que necesitan control de temperatura preciso y constante. La tecnología Inverter ajusta el consumo para mantener el clima ideal en frío y en calor, con un diseño blanco elegante para ambientes modernos.",
    sku: "HY10INV-6000FC",
    longIntro:
      "Máxima potencia y eficiencia en un solo equipo. El aire acondicionado HYUNDAI Inverter de 6400 W es la solución definitiva para quienes buscan un rendimiento superior. Con tecnología Inverter, adapta el consumo energético para mantener la temperatura perfecta en modo frío y en modo calor. Es ideal para ambientes amplios que requieren climatización estable y precisa, y su sofisticado diseño en blanco suma distinción a cualquier espacio.",
    manualFileLabel: "Descargar PDF (2,5 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY10INV-6000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "6400 W · 5504 frigorías" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R410A" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "1010 × 315 × 220 mm" },
      { label: "Peso ext. / int.", value: "33,0 kg / 16,0 kg" },
      { label: "Ruido ext. / int.", value: "56 dB / 44/47/50 dB" },
      { label: "Potencia nominal calor", value: "1874 W (máx. 2600 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-6400-hy11": {
    name: "Acondicionador de aire HYUNDAI Inverter 6400 Frío/Calor Blanco — HY11INV-6000FC",
    shortDescription:
      "Para quienes exigen lo mejor. Este aire inverter de 6400 W garantiza el clima ideal en todo momento, con diseño moderno y consumo eficiente. ¡Un aliado indispensable para tu hogar!",
    description:
      "Pensado para grandes espacios, el aire acondicionado HYUNDAI Inverter de 6400 W ofrece un control climático óptimo en todo momento. Su tecnología Inverter regula el consumo según las condiciones de temperatura para un rendimiento constante y eficiente, con funcionamiento silencioso y un diseño blanco minimalista ideal para hogares y oficinas.",
    sku: "HY11INV-6000FC",
    longIntro:
      "Diseñado para grandes espacios, el aire acondicionado HYUNDAI Inverter de 6400 W garantiza un clima ideal en todo momento. Su tecnología Inverter regula el consumo energético según las condiciones de temperatura, con un rendimiento uniforme y eficiente. Además, su funcionamiento silencioso y su diseño blanco minimalista lo convierten en una excelente opción tanto para hogares como para entornos de trabajo que requieren confort y control.",
    manualFileLabel: "Descargar PDF (2,5 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-6000FC" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "6400 W · 5504 frigorías" },
      { label: "Tecnología", value: "Inverter" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "1010 × 315 × 220 mm" },
      { label: "Peso ext. / int.", value: "33,0 kg / 16,0 kg" },
      { label: "Ruido ext. / int.", value: "55 dB / 32/38/47 dB" },
      { label: "Potencia nominal calor", value: "1959 W (máx. 2600 W)" },
      { label: "Garantía", value: "1 año" },
    ],
  },
  "ac-6000-wifi": {
    name: "Aire acondicionado HYUNDAI Inverter WIFI 6000 Frío/Calor Blanco",
    shortDescription:
      "Confort total con el HYUNDAI Inverter HY11INV-6000FCW: la tecnología Inverter optimiza el consumo para mantener la temperatura ideal y ahorrar en la factura, y el Wi‑Fi integrado permite controlarlo desde el smartphone y ajustar el clima de tu hogar en cualquier momento y lugar.",
    description:
      "El HYUNDAI Inverter HY11INV-6000FCW combina tecnología, eficiencia y confort para grandes ambientes. El sistema Inverter adapta la velocidad del compresor al requerimiento, el Wi‑Fi permite manejar todas las funciones a distancia y el sistema de filtración avanzada ayuda a mejorar la calidad del aire, con un diseño blanco moderno para hogar u oficina.",
    sku: "HY11INV-6000FCW",
    longIntro:
      "El aire acondicionado HYUNDAI Inverter HY11INV-6000FCW es la combinación ideal de tecnología, eficiencia y confort. Diseñado para un rendimiento óptimo, su sistema Inverter ajusta automáticamente la velocidad del compresor y puede reducir el consumo energético hasta en un 40% respecto de muchas unidades convencionales sin inverter. Gracias al Wi‑Fi integrado podés controlar todas sus funciones desde el smartphone y dejar la temperatura lista antes de llegar a casa. Incorpora además un sistema de filtración avanzado que mejora la calidad del aire al retener polvo y alérgenos. Su diseño moderno y elegante se integra en cualquier ambiente. Con el HYUNDAI HY11INV-6000FCW, disfrutá de un clima perfecto todo el año.",
    manualFileLabel: "Descargar PDF (2,5 MB)",
    specs: [
      { label: "Marca", value: "Hyundai Electronics" },
      { label: "Modelo", value: "HY11INV-6000FCW" },
      { label: "Color", value: "Blanco" },
      { label: "Modos de funcionamiento", value: "Frío / Calor" },
      { label: "Capacidad frío/calor", value: "6400 W · 5504 frigorías" },
      { label: "Tecnología", value: "Inverter · Wi‑Fi" },
      { label: "Eficiencia energética", value: "A++" },
      { label: "Tensión", value: "220V" },
      { label: "Refrigerante", value: "R32" },
      { label: "Unidad exterior (An×Pr×Al)", value: "853 × 349 × 602 mm" },
      { label: "Unidad interior (An×Al×Pr)", value: "1010 × 315 × 220 mm" },
      { label: "Peso ext. / int.", value: "32,0 kg / 13,0 kg" },
      { label: "Ruido ext. / int.", value: "55 dB / 32/38/47 dB" },
      { label: "Potencia nominal calor", value: "1959 W (máx. 2600 W)" },
      { label: "Garantía", value: "1 año" },
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
