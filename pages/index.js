import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import homeStyles from "styles/Home.module.scss";
import tileStyles from "styles/Tile.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import commonStyles from "styles/Common.module.scss";
import sectionStyles from "styles/Section.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, TYPES } from "lib/api";

export default function Home({ projects, notes }) {
  return (
    <Layout>
      <Grid className={layoutStyles.container}>
        <div className={homeStyles.headline}>
          I help build{" "}
          <span className={commonStyles.highlight}>digital products</span> and{" "}
          <span
            className={clsx(
              commonStyles.highlight,
              commonStyles.highlight_green
            )}
          >
            effective teams.
          </span>
          <br />
          This is my story.
        </div>
      </Grid>
      <Section className={sectionStyles.section_gray} title="Lastest updates">
        <div className={layoutStyles.grid3}>
          {[1, 2, 3].map((item, index) => (
            <Tile key={index} tile={{ title: `Title ${index}` }} />
          ))}
        </div>
      </Section>
      {projects.length > 0 && (
        <Section title="Ideas from lab">
          <div className={layoutStyles.grid3}>
            {projects.map((item, index) => (
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
      )}
      {notes.length > 0 && (
        <Section title="Notes">
          <div className={layoutStyles.grid3}>
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
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAll(TYPES.LAB, ["title", "date", "category"]);
  const notes = getAll(TYPES.NOTES, ["title", "date", "category"]);

  return {
    props: { projects, notes },
  };
}
