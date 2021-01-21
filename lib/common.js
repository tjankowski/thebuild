export function sortByDate(item1, item2) {
  return item1.date > item2.date ? "-1" : "1";
}

export function toDate(date) {
  return new Date(date).toLocaleDateString();
}
