import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navy = "#003399";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#f8f9fa] text-zinc-600">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block leading-none">
              <span
                className="block text-xl font-bold tracking-tight sm:text-2xl"
                style={{ color: navy }}
              >
                HYUNDAI
              </span>
              <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                Electronics
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Engineered for excellence. We bring the latest in display and climate
              control technology to your home.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-zinc-500 transition hover:text-[#003399]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tvs" className="text-zinc-500 transition hover:text-[#003399]">
                  TVs
                </Link>
              </li>
              <li>
                <Link href="/acs" className="text-zinc-500 transition hover:text-[#003399]">
                  ACs
                </Link>
              </li>
            </ul>
          </div>

          <div id="contact">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Contact Us
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="shrink-0 text-zinc-400" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:sales@hyundaielectronics.demo"
                  className="break-all text-zinc-500 transition hover:text-[#003399]"
                >
                  sales@hyundaielectronics.demo
                </a>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-zinc-400" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <a
                  href="tel:+15550007777"
                  className="text-zinc-500 transition hover:text-[#003399]"
                >
                  +1 (555) 000-7777
                </a>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-zinc-400" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-zinc-500">Silicon District, Tech City</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Connect
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full max-w-[240px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe57] sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200/80 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
          <p>
            © {new Date().getFullYear()} HYUNDAI Electronics. Engineered for Excellence.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="#" className="transition hover:text-[#003399]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-[#003399]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
