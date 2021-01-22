import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, TYPES } from "lib/api";

export default function Lab({ projects }) {
  return (
    <Layout>
      <Grid className="container">
        <h1 className="headline">
          Playground for prototypes, concepts, and experiments.
        </h1>
      </Grid>
      <Section>
        <div className="grid">
          {projects.map((item, index) => (
            <Tile
              key={index}
              tile={{
                title: item.title,
                subtitle: item.category,
                date: item.date,
                link: item.link,
              }}
              className="tile_horizontal"
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
