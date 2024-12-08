export const formatCurrency = (value?: number): string | null => {
  if (!value) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};

export const formatPercent = (value?: number): string | null => {
  if (!value) return null;
  return `${value.toFixed(1)}%`;
};
