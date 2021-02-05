import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getPublished, TYPES } from "lib/api";

export default function Notes({ notes }) {
  return (
    <Layout>
      <Grid className="container">
        <h1 className="headline">
          Notes, thoughts, subjective opinions, materials, and topics for
          discussion.
        </h1>
      </Grid>
      <Section>
        <div className="grid">
          {notes.map((item, index) => (
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
  const notes = getPublished(TYPES.NOTES, [
    "title",
    "date",
    "category",
    "link",
  ]);

  return {
    props: { notes },
  };
}
