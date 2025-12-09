import { getAllProducts } from "@/actions/product.action";
import BestDealsCard from "./BestDealsCard";

const BestDeals = async () => {
  const products = await getAllProducts();
  return <BestDealsCard products={products?.data} />;
};

export default BestDeals;
