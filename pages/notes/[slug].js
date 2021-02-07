import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, getBySlug, TYPES } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Container from "components/Container";
import { calculateReadingTime, toDate } from "lib/common";

export default function Notes({ item, readingTime }) {
  return (
    <Layout>
      <Grid className="container">
        <article className="article">
          <h1>{item.title}</h1>
          <div className="article__info">
            {toDate(item.date)} &#65372; {readingTime} min read
          </div>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </article>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const item = getBySlug(TYPES.NOTES, params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(item.content || "");
  const readingTime = calculateReadingTime(content);

  return {
    props: {
      item: {
        ...item,
        content,
      },
      readingTime,
    },
  };
}

export async function getStaticPaths() {
  const items = getAll(TYPES.NOTES, ["slug"]);

  return {
    paths: items.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
}
