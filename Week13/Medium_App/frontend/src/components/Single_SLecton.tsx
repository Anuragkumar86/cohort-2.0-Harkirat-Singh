
export const SingleSkeleton =  () => {

  return (
    <div className="max-w-7xl mx-auto pl-30 p-6 mt-15">
      {/* Blog Content */}
      <div className="flex flex-col md:flex-row md:space-x-20">
        {/* Left Side: Blog Details */}
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold text-gray-900">
          <div className="h-8 bg-gray-300 rounded w-2/3 mb-2"></div>
          </h1>
          <p className="text-gray-500 mt-2"><div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div></p>

          <p className="mt-6 text-gray-800 leading-relaxed">
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          </p>
        </div>

        {/* Right Side: Author Info */}
        <div className="w-110 h-50 bg-slate-50 p-6 rounded-lg shadow-sxl mt-8">
          <h3 className="text-gray-700 font-medium pl-12"><div className="h-4 bg-gray-300 rounded w-18 mb-9"></div></h3>
          <div className="flex items-center space-x-3 mt-3 ">
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
            <div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-40"></div>
            <div className=" mt-1 h-3 bg-gray-300 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

