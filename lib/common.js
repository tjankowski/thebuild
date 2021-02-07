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

export function countWords(text) {
  let s = text;
  s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  return s.split(" ").filter(function (str) {
    return str != "";
  }).length;
}

export function calculateReadingTime(text) {
  const numberOfWords = countWords(text);
  const READING_SPEED = 275; //words per minute
  return Math.ceil(numberOfWords / READING_SPEED);
}
