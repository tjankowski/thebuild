import clsx from "clsx";
import Container from "./Container";

export default function Section({ title, className, children }) {
  return (
    <div className={clsx("section", className)}>
      <Container>
        {title && (
          <h3 className={clsx("highlight", "section__title")}>{title}</h3>
        )}
        {children}
      </Container>
    </div>
  );
}
