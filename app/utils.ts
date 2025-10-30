export function getMonthName(dateStr: string, lang: "es" | "en") {
  const monthNames = {
    es: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const monthIndex = parseInt(dateStr.split("-")[1], 10) - 1;
  const monthAbbrev = monthNames[lang][monthIndex];

  return monthAbbrev;
}
