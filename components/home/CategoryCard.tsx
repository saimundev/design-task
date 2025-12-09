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
      <div className="absolute bottom-6 left-0 w-[85%] bg-[#FEF9F9F2] shadow-lg py-3 px-6 flex items-center justify-between border-l-4 border-[#FEF9F9F2]">
        <h3 className="text-2xl font-normal text-black">{name}</h3>
        <button className="text-cyan-500 font-normal text-xl hover:text-cyan-600 transition-colors">
          Shop
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
