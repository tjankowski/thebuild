import Grid from "components/Grid";
import clsx from "clsx";
import Layout from "components/Layout";
import Section from "components/Section";
import Tile from "components/Tile";
import { getAll, getBySlug, TYPES } from "lib/api";
import { sortByDate } from "lib/common";
import Headline from "components/Headline";
import Container from "components/Container";
import HeadlineOld from "components/HeadlineOld";
import markdownToHtml from "lib/markdownToHtml";

export default function Home({ latest, content }) {
  return (
    <Layout>
      <Grid className="container">
        <HeadlineOld />
      </Grid>
      <Grid className="container">
        <article className="article">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
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
  const item = getBySlug(TYPES.STATIC, "about", ["content"]);
  const content = await markdownToHtml(item.content || "");

  const latest = [...projects, ...notes].sort(sortByDate).slice(0, 3);

  return {
    props: { projects, notes, latest, content },
  };
}
