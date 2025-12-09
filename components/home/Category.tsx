import { getCategories } from "@/actions/product.action";
import CategorySlider from "./CategorySlider";

export default async function Category() {
  const categorys = await getCategories();
  return <CategorySlider categorys={categorys?.data} />;
}
