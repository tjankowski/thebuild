import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import tileStyles from "styles/Tile.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import sectionStyles from "styles/Section.module.scss";
import commonStyles from "styles/Common.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";

export default function Lab() {
  return (
    <Layout>
      <Grid className={layoutStyles.container}>
        <h1 className={commonStyles.headline}>
          Playground for prototypes, concepts, and experiments.
        </h1>
      </Grid>
      <Section>
        <div className={layoutStyles.grid}>
          {Array.from({ length: 10 }, (v, k) => k).map((item, index) => (
            <Tile
              key={index}
              tile={{
                title: `Title ${index}`,
                image: "/public/images/2019.jpg",
              }}
              className={tileStyles.tile_horizontal}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
