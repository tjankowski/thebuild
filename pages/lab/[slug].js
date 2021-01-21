import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import tileStyles from "styles/Tile.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import sectionStyles from "styles/Section.module.scss";
import articleStyles from "styles/Article.module.scss";
import commonStyles from "styles/Common.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, getBySlug, TYPES } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Container from "components/Container";

export default function Lab({ item }) {
  return (
    <Layout>
      <Grid className={layoutStyles.container}>
        <article className={articleStyles.article}>
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
