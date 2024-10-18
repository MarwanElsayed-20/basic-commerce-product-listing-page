import React from "react";
import Categories from "./Categories";
import Link from "next/link";

export default function Sidebar({}) {
  return (
    <>
      <div className="flex flex-col gap-6 h-full lg:p-6 w-full lg:w-[25%] lg:border-r">
        <div className="flex flex-col justify-center items-center border-b pb-6">
          <Link href={"/"}>
            <p className="font-semibold text-4xl text-primary">BCPLP</p>
          </Link>
        </div>
        <Categories />
      </div>
    </>
  );
}
