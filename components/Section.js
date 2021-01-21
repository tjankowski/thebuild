import clsx from "clsx";
import styles from "styles/Section.module.scss";
import layoutStyles from "styles/Layout.module.scss";
import commonStyles from "styles/Common.module.scss";
import Container from "./Container";

export default function Section({ title, className, children }) {
  return (
    <div className={clsx(styles.section, className)}>
      <Container>
        {title && (
          <h3 className={clsx(commonStyles.highlight, styles.section__title)}>
            {title}
          </h3>
        )}
        {children}
      </Container>
    </div>
  );
}
