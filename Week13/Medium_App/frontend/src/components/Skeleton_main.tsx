import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="p-6 space-y-4 max-w-2xl mx-88 mt-16">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex items-start gap-4 border-b pb-4 animate-pulse">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-400 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-300 rounded w-20"></div>
                <div className="h-6 bg-gray-300 rounded w-12"></div>
              </div>
            </div>
            <div className="w-30 h-40 bg-gray-300 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default LoadingSkeleton;
