import getRandomRating from "@/lib/utils/getRandomRating";
import Image from "next/image";
import React from "react";

export default function ProductCard({
  image,
  title,
  price,
  description,
}: {
  image: string;
  title: string;
  price: number;
  description: string;
}) {
  const rating = getRandomRating();

  return (
    <div className="bg-white rounded-xl border h-full transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-contain w-full h-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
      <div className="p-4 flex flex-col">
        <h2
          className="text-lg font-medium text-gray-800 truncate"
          title={title}
        >
          {title}
        </h2>
        <p
          className="text-gray-600 text-sm mt-1 line-clamp-2"
          title={description}
        >
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
          <span className="text-yellow-500 text-sm font-semibold">
            {rating} ★
          </span>
        </div>
      </div>
    </div>
  );
}
