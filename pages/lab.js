import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import tileStyles from "styles/Tile.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import sectionStyles from "styles/Section.module.scss";
import commonStyles from "styles/Common.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, TYPES } from "lib/api";

export default function Lab({ projects }) {
  return (
    <Layout>
      <Grid className={layoutStyles.container}>
        <h1 className={commonStyles.headline}>
          Playground for prototypes, concepts, and experiments.
        </h1>
      </Grid>
      <Section>
        <div className={layoutStyles.grid}>
          {projects.map((item, index) => (
            <Tile
              key={index}
              tile={{
                title: item.title,
                subtitle: item.category,
                date: item.date,
                link: item.link,
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
  const projects = getAll(TYPES.LAB, ["title", "date", "category", "link"]);

  return {
    props: { projects },
  };
}
