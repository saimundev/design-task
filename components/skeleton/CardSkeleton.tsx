const CardSkeleton = ({ size = 4 }: { size?: number }) => {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: size }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded border border-gray-200 p-4 w-full shadow-sm"
        >
          <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-36 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-24 w-full bg-gray-200 rounded animate-pulse mb-3"></div>

          <div className="flex items-center gap-2 mb-3">
            <div className="h-3.5 w-14 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="h-9 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
