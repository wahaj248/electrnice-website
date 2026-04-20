export function formatInr(amount: number): string {
  // Kept function name for minimal refactor; now formats in USD.
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
