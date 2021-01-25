import Section from "./Section";
import Tile from "./Tile";
import TileLink from "./TileLink";

export default function TilesSection({ tiles, title, href, className }) {
  return (
    tiles.length > 0 && (
      <Section className={className} title={title}>
        <div className="grid3">
          {tiles.map((item, index) => (
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
          {href && <TileLink href={href}>Find out more</TileLink>}
        </div>
      </Section>
    )
  );
}
