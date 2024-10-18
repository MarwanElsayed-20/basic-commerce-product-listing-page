import { Suspense } from "react";
import CategoryList from "../ui/List/CategoryList";
import ListSkeleton from "../ui/Skeleton/ListSkeleton";

export default async function Categories() {
  return (
    <>
      <p className="font-bold text-center lg:text-start">Shop by category</p>
      <Suspense fallback={<ListSkeleton length={5} />}>
        <CategoryList />
      </Suspense>
    </>
  );
}
