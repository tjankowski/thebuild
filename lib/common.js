import format from "date-fns/format";

export function sortByDate(item1, item2) {
  return item1.date > item2.date ? "-1" : "1";
}

export function toDate(date) {
  return format(new Date(date), "PP");
}

export function isFilePublished(filename) {
  return !filename.startsWith("_");
}
