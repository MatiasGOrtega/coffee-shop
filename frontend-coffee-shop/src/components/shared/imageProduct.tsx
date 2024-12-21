import React from "react";

interface Props {
  imageUrl: {
    url: string;
  }[];
  className?: string;
}

function ImageProduct({ imageUrl, className }: Props) {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl[0].url}`}
      className={className}
      alt="Image coffee"
    />
  );
}

export default ImageProduct;
