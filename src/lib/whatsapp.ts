/** E.164 digits only (no +), used by wa.me links */
export const WHATSAPP_PHONE = "18098191153";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/** Default CTA when no product context (footer, cart, etc.) */
export const WHATSAPP_URL = buildWhatsAppUrl(
  "Hi, I'd like to know more about HYUNDAI electronics.",
);
