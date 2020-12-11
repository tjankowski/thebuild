import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import homeStyles from "styles/Home.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import commonStyles from "styles/Common.module.scss";
import sectionStyles from "styles/Section.module.scss";
import Section from "components/Section";
import Tile from "components/Tile";

export default function Home() {
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
      <Section title="Ideas from lab">
        <div className={layoutStyles.grid3}>
          {[1, 2, 3].map((item, index) => (
            <Tile key={index} tile={{ title: `Title ${index}` }} />
          ))}
        </div>
      </Section>
      <Section title="Notes">
        <div className={layoutStyles.grid3}>
          {[1, 2, 3].map((item, index) => (
            <Tile key={index} tile={{ title: `Title ${index}` }} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
