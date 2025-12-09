import { getAllProducts } from "@/actions/product.action";
import ProductCard from "./ProductCard";

const NewArrivals = async () => {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto mt-18">
      <div className="text-[28px] font-normal ml-10 mb-6">
        <span className="text-primary-soft">New</span> Arrivals
      </div>
      <div className="grid grid-cols-6  gap-8">
        {products?.data?.slice(0, 10)?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
