import clsx from "clsx";

export default function Container({ className, children }) {
  return <div className={clsx("container", className)}>{children}</div>;
}
