import clsx from "clsx";

export default function HeadlineOld() {
  return (
    <div className="headline">
      I help build <span className="highlight">digital products</span>
      <br /> and{" "}
      <span className={clsx("highlight", "highlight_green")}>
        effective teams.
      </span>
    </div>
  );
}
