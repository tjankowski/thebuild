import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, getBySlug, TYPES } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Container from "components/Container";

export default function Lab({ item }) {
  return (
    <Layout>
      <Grid className="container">
        <article className="lab">
          <h1>{item.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </article>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  console.log(params);
  const item = getBySlug(TYPES.LAB, params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(item.content || "");

  return {
    props: {
      item: {
        ...item,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const items = getAll(TYPES.LAB, ["slug"]);

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
