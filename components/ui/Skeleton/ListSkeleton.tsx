import React from "react";

export default function ListSkeleton({ length }: { length: number }) {
  return (
    <div className="flex items-center gap-2 animate-pulse">
      <ul className="flex lg:flex-col gap-4 w-full">
        {Array.from({ length }).map((_, index) => (
          <li
            key={index}
            className="bg-gray-300 rounded-md p-3 w-full h-6"
          ></li>
        ))}
      </ul>
    </div>
  );
}
