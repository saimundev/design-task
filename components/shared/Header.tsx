import { getCategories, getAllProducts } from "@/actions/product.action";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const categories = await getCategories();
  const products = await getAllProducts();

  return (
    <HeaderClient categories={categories?.data} products={products?.data} />
  );
};

export default Header;
