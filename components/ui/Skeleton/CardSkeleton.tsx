import React from "react";

export default function CardSkeleton({ length }: { length: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border h-full transform transition-transform duration-300"
        >
          {/* Skeleton for Image */}
          <div className="relative w-full h-56 overflow-hidden bg-gray-300 animate-pulse"></div>

          {/* Skeleton for Content */}
          <div className="p-4 flex flex-col">
            <div className="bg-gray-300 h-6 rounded-md lg:w-3/4 mb-2 animate-pulse"></div>{" "}
            {/* Title Skeleton */}
            <div className="bg-gray-300 h-4 rounded-md w-full mb-2 animate-pulse"></div>{" "}
            {/* Description Skeleton */}
            <div className="flex justify-between items-center mt-4">
              <div className="bg-gray-300 h-6 rounded-md lg:w-1/2 animate-pulse"></div>{" "}
              {/* Price Skeleton */}
              <div className="bg-gray-300 h-4 rounded-md lg:w-1/6 animate-pulse"></div>{" "}
              {/* Rating Skeleton */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
