import React from "react";

function SkeletonProduct() {
  return (
    <div className="flex animate-pulse justify-center py-4 sm:px-24 sm:py-32">
      <div className="h-96 w-96 rounded-lg bg-gray-300"></div>
      <div className="ml-8">
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
        <div className="mt-4 h-4 w-80 rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
}

export default SkeletonProduct;
