import Product from "./Product";

export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItem: "center",
  };

  return (
    <div style={styles}>
      <Product title="Logitech MX master" idx={0} />
      <Product title="Apple pencil (2nd gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronic Toad 23" idx={3} />
    </div>
  );
}
