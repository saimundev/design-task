import { ProductItems } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ProductItems;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { title, image, price, category } = product;
  return (
    <div className="bg-white border border-[#00000021] p-3.5">
      {/* Header */}
      <div className="p-6 pb-3">
        <h2 className="text-sm font-normal text-black">{category}</h2>
        <h3 className="text-primary-soft text-base font-normal mt-3">
          {title?.slice(0, 12)}...
        </h3>
      </div>

      {/* Product Image */}
      <div className="py-3">
        <Image
          src={image}
          width={400}
          height={130}
          alt={title}
          className="w-full object-contain h-32.5"
        />
      </div>

      {/* Pricing */}

      <div className="flex items-center gap-2">
        <span className="text-[#697475] line-through text-sm">RS 60,000</span>
        <span className="text-[#0AAEB9] font-normal text-base">
          RS {price.toFixed(2)}
        </span>
      </div>

      {/* Add to Cart Button */}

      <button className="w-full text-white text-base font-normal h-9 bg-primary mt-2.5">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
