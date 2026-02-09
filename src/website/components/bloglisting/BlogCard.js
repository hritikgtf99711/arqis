import React from "react";
import Image from "next/image";

export default function BlogCard({ image, heading, index, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-[#f7efe1]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={heading}
          width={400}
          height={300}
          className="w-full h-[250px] object-cover transition-transform hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium">{heading}</h3>
    </div>
  );
}