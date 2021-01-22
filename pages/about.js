import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, TYPES } from "lib/api";
import { sortByDate } from "lib/common";

export default function Home({ latest }) {
  return (
    <Layout>
      <Grid className="container">
        <div className="headline">
          I help build <span className="highlight">digital products</span> and{" "}
          <span className={clsx("highlight", "highlight_green")}>
            effective teams.
          </span>
          <br />
          This is my story.
        </div>
      </Grid>
      <Section className="section_gray" title="Lastest updates">
        <div className="grid3">
          {latest.map((item, index) => (
            <Tile
              key={index}
              tile={{
                title: item.title,
                subtitle: item.category,
                date: item.date,
                link: item.link,
              }}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAll(TYPES.LAB, ["title", "date", "category", "link"], 5);
  const notes = getAll(TYPES.NOTES, ["title", "date", "category", "link"], 5);

  const latest = [...projects, ...notes].sort(sortByDate).slice(0, 3);

  return {
    props: { projects, notes, latest },
  };
}
