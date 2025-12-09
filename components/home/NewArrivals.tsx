import { getAllProducts } from "@/actions/product.action";
import NewArrivalsCarousel from "./NewArrivalsCarousel";

const NewArrivals = async () => {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto mt-18">
      <div className="text-[28px] font-normal ml-10 mb-6">
        <span className="text-primary-soft">New</span> Arrivals
      </div>
      <NewArrivalsCarousel products={products?.data?.slice(0, 10) || []} />
    </div>
  );
};

export default NewArrivals;
