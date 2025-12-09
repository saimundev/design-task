import { getCategories, getProductByCategory } from "@/actions/product.action";
import BestDealsCard from "./BestDealsCard";
const BestDeals = async () => {
  const categorys = await getCategories();
  const productsCategory = await getProductByCategory(categorys?.data[0]?.name);

  console.log("categorys?.data[0]?.name", categorys?.data[0]?.name);

  return (
    <BestDealsCard
      products={productsCategory?.data}
      categorys={categorys?.data}
    />
  );
};

export default BestDeals;
