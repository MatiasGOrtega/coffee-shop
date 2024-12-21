import React from "react";

function SkeletonProduct() {
  return (
    <div className="flex animate-pulse flex-col items-center sm:items-start justify-center py-4 sm:flex-row sm:px-24 sm:py-32">
      <div className="h-80 w-80 rounded-lg bg-gray-300"></div>
      <div className="sm:ml-8">
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
}

export default SkeletonProduct;
