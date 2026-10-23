type WeatherLocale = "ky" | "en";
const weekdays = {
  ky: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
} as const;

// Forecast dates are calendar dates at the destination, not visitor instants.
export function forecastWeekday(iso: string, locale: WeatherLocale): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return "—";
  const date = new Date(`${iso}T12:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== iso) return "—";
  return weekdays[locale][date.getUTCDay()];
}

export function destinationUpdateTime(timestamp: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Bishkek", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(new Date(timestamp)) + " (UTC+6)";
}
