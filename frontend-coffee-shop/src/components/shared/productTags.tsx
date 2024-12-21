import React from "react";

interface Props {
  test: string;
  origin: string;
  className?: string;
}

function ProductTags({ test, origin, className }: Props) {
  return (
    <div className="flex gap-1 text-sm">
      <span
        className={`rounded bg-black px-2 py-1 text-white dark:bg-white dark:text-black ${className}`}
      >
        {test}
      </span>
      <span
        className={`rounded bg-orange-500 px-2 py-1 text-white ${className}`}
      >
        {origin}
      </span>
    </div>
  );
}

export default ProductTags;
