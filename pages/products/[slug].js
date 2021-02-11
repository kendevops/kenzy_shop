import products from "../../products.json";
import { fromImageToUrl } from "../../utils/urls";
const product = product[0];

const Product = () => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} alt={product.slug} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.content}</p>
    </div>
  );
};
