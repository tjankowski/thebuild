import clsx from "clsx";
import layoutStyles from "styles/Layout.module.scss";

export default function Container({ className, children }) {
  return (
    <div className={clsx(layoutStyles.container, className)}>{children}</div>
  );
}
