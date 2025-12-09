import { getAllProducts } from "@/actions/product.action";
import ProductCard from "./ProductCard";

const NewArrivals = async () => {
  const products = await getAllProducts();
  return (
    <div>
      {products?.data?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default NewArrivals;
