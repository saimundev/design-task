import { ProductItems } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ProductItems;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { title, description, image, price } = product;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-80 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-3">
          <h2 className="text-lg font-normal text-gray-800">{title}</h2>
          <h3 className="text-teal-700 font-normal mt-1 text-lg">
            {description}
          </h3>
        </div>

        {/* Product Image */}
        <div className="px-6 py-4">
          <Image src={image} width={400} height={200} alt={title} className="w-full h-48" />
        </div>

        {/* Pricing */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 line-through text-xl">
              RS 60,000
            </span>
            <span className="text-teal-500 font-normal text-3xl">
              RS {price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="px-6 pb-6">
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-normal text-lg py-4 rounded transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
