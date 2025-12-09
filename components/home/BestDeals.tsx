import { getCategories, getProductByCategory } from "@/actions/product.action";
import BestDealsCard from "./BestDealsCard";
const BestDeals = async ({ active = 0 }: { active?: number }) => {
  const categorys = await getCategories();
  const activeCategory =
    categorys?.data[active]?.name || categorys?.data[0]?.name;
  const productsCategory = await getProductByCategory(activeCategory);

  return (
    <BestDealsCard
      products={productsCategory?.data}
      categorys={categorys?.data}
      initialActiveIndex={active}
    />
  );
};

export default BestDeals;
