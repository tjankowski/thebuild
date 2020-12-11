import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import tileStyles from "styles/Tile.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import commonStyles from "styles/Common.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAllPosts } from "lib/api";

export default function Notes({ notes }) {
  return (
    <Layout>
      <Grid className={layoutStyles.container}>
        <h1 className={commonStyles.headline}>
          Notes, thoughts, subjective opinions, materials, and topics for
          discussion.
        </h1>
      </Grid>
      <Section>
        <div className={layoutStyles.grid}>
          {notes.map((item, index) => (
            <Tile
              key={index}
              tile={{
                title: item.title,
                subtitle: item.category,
                date: item.date,
              }}
              className={tileStyles.tile_horizontal}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const notes = getAllPosts(["title", "date", "category"]);

  return {
    props: { notes },
  };
}
