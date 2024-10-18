import { getData } from "@/lib/actions/getData";
import { CategoryT } from "@/lib/types/categoryTypes";
import Link from "next/link";
import React from "react";

export default async function CategoryList() {
  const categories = await getData({
    endpoint: "products/categories",
  });

  return (
    <div className="flex items-center gap-2">
      <ul className="flex flex-row overflow-auto lg:flex-nowrap lg:flex-col gap-2 lg:gap-4 w-full">
        {categories.map((category: CategoryT, index: number) => (
          <Link
            key={index}
            href={`/category/${category.split(" ").join("-").toLowerCase()}`}
            className="cursor-pointer p-2 lg:p-3 transition-all duration-100 hover:bg-primary hover:text-neutral rounded-md"
          >
            <p>{category}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
