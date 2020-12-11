import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

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
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAll(type, fields = []) {
  const filenames = getFilenames(type);
  const items = filenames
    .map((filename) => getByFilename(type, filename, fields))
    // sort posts by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? "-1" : "1"));
  return items;
}
