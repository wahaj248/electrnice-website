import { StaticImageData } from "next/image";
import LatestInsightsImage from "../../public/latest/img1.jpg";
import LatestInsightsImage2 from "../../public/latest/img2.jpg";
import LatestInsightsImage3 from "../../public/latest/img3.jpg";
export type GuidePost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  body: string;
};

export const guidePosts: GuidePost[] = [
  {
    slug: "perfect-smart-tv",
    category: "Buying Guide",
    title: "How to Choose the Perfect Smart TV for Your Living Room",
    description:
      "Learn about viewing distances, panel types, and feature sets that matter for your specific space.",
    image:
      LatestInsightsImage,
    body:
      "Start by measuring your seating distance, then match screen size and resolution. Compare smart platforms, HDR support, and connectivity before you buy.",
  },
  {
    slug: "ac-efficiency",
    category: "Maintenance",
    title: "Top 5 Tips to Keep Your Air Conditioner Running Efficiently",
    description:
      "Save on energy bills and extend the life of your AC with these simple professional maintenance steps.",
    image:
      LatestInsightsImage2,
    body:
      "Clean or replace filters on schedule, keep outdoor units clear, set sensible temperatures, seal doors and windows, and book seasonal professional service.",
  },
  {
    slug: "4k-vs-oled",
    category: "Buying Guide",
    title: "Understanding 4K UHD vs. OLED: Which One is Right for You?",
    description:
      "Demystifying display technologies to help you choose the best image quality for your home.",
    image:
      LatestInsightsImage3,
    body:
      "4K UHD refers to resolution; OLED is a panel technology known for deep blacks and contrast. Your room lighting and content habits should guide the final pick.",
  },
];

export function getGuideBySlug(slug: string): GuidePost | undefined {
  return guidePosts.find((p) => p.slug === slug);
}
