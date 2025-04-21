const Skeleton = () => {
  return (
    <div className="max-w-5xl py-8 px-4 mx-auto animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-[400px] bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
          <div className="h-20 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
