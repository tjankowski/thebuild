import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sortByDate } from "./common";
import { FIELDS } from "./data";

export const TYPES = {
  NOTES: "notes",
  LAB: "lab",
};

function getDirectory(type) {
  return join(process.cwd(), `_data/${type}`);
}

export function getFilenames(type) {
  return fs.readdirSync(getDirectory(type));
}

export function getBySlug(type, slug, fields = []) {
  return getByFilename(type, `${slug}.md`, fields);
}

export function getByFilename(type, filename, fields = []) {
  const realSlug = filename.replace(/\.md$/, "");
  const fullPath = join(getDirectory(type), filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === FIELDS.SLUG) {
      items[field] = realSlug;
    }
    if (field === FIELDS.LINK) {
      items[field] = `/${type}/${encodeURIComponent(realSlug)}`;
    }
    if (field === FIELDS.CONTENT) {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAll(type, fields = [], limit) {
  const filenames = getFilenames(type);
  const limitItems = limit || filenames.length;
  const items = filenames
    .map((filename) => getByFilename(type, filename, fields))
    // sort posts by date in descending order
    .sort(sortByDate)
    .slice(0, limitItems);
  return items;
}
