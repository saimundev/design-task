import Image from "next/image";

type CategoryProps = {
  name: string;
  image: string;
};
const CategoryCard = ({ name, image }: CategoryProps) => {
  return (
    <div className="relative  group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={390}
          height={200}
          className="w-full h-full border-2 border-white object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Category Info */}
      <div className="absolute bottom-3 w-[269px] h-12 left-0 right-0 bg-[#FEF9F9F2] backdrop-blur-sm p-4 flex items-center justify-between">
        <h3 className="text-2xl font-normal text-black">{name}</h3>
        <button className="text-secondary font-normal text-xl hover:text-secondary transition-colors">
          Shop
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
