import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getPublished, TYPES } from "lib/api";
import { sortByDate } from "lib/common";
import TileLink from "components/TileLink";
import TilesSection from "components/TilesSection";
import Headline from "components/Headline";

export default function Home({ projects, notes, latest }) {
  return (
    <Layout>
      <Grid className="container">
        <Headline />
      </Grid>
      <TilesSection
        className="section_gray"
        tiles={latest}
        title="Latest updates"
      />
      <TilesSection tiles={projects} title="Ideas from lab" href="/lab" />
      <TilesSection tiles={notes} title="Notes" href="/notes" />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getPublished(
    TYPES.LAB,
    ["title", "date", "category", "link"],
    5
  );
  const notes = getPublished(
    TYPES.NOTES,
    ["title", "date", "category", "link"],
    5
  );

  const latest = [...projects, ...notes].sort(sortByDate).slice(0, 3);

  return {
    props: { projects, notes, latest },
  };
}
