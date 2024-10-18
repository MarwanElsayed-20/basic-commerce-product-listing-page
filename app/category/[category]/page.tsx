import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";
import CardSkeleton from "@/components/ui/Skeleton/CardSkeleton";
import React, { Suspense } from "react";

export default function page({
  params,
}: {
  params: {
    category: string;
  };
}) {
  return (
    <>
      <div className="h-full w-full lg:w-[75%] lg:p-6 overflow-auto">
        <Suspense fallback={<CardSkeleton length={6} />}>
          <CategoryProducts params={params} />
        </Suspense>
      </div>
    </>
  );
}
