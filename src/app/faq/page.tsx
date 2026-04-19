import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about HYUNDAI TVs and air conditioners.",
};

const faqs = [
  {
    q: "How do I pick the right TV size?",
    a: "Measure the distance from your sofa to the wall, then use a viewing-distance chart. Our team can help you match size and resolution to your room.",
  },
  {
    q: "What does inverter mean on an AC?",
    a: "Inverter compressors adjust speed instead of switching on and off fully, which often saves energy and keeps temperatures steadier with less noise.",
  },
  {
    q: "Do you offer installation?",
    a: "Installation options depend on your region and retailer. Contact us on WhatsApp for guidance and local partner information.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-[#0056b3] hover:underline"
      >
        ← Back to home
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#001f3f]">
        FAQs - Everything You Need To Know
      </h1>
      <p className="mt-3 text-zinc-600">
        Quick answers about choosing and caring for HYUNDAI electronics.
      </p>
      <ul className="mt-10 space-y-8">
        {faqs.map((item) => (
          <li key={item.q} className="border-b border-zinc-200 pb-8 last:border-0">
            <h2 className="text-lg font-semibold text-zinc-900">{item.q}</h2>
            <p className="mt-2 leading-relaxed text-zinc-600">{item.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
