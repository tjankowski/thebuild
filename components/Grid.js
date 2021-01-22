export default function Grid({ className, children }) {
  return <div className={["grid", className].join(" ")}>{children}</div>;
}
