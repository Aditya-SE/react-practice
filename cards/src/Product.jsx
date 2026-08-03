import Price from "./price";
import "./Product.css";
export default function Product({ title, idx }) {
  let oldPrice = ["12,499", "11900", "1,599", "599"];
  let newPrice = ["10,499", "9599", "999", "249"];
  let description = [
    ["8,000 dpi","5 Programmable button"],
    ["intuitive surface","designed for ipad pro"],
    ["designed for ipad pro","intuitive surface"],
    ["wireless","optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
