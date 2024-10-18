import { getData } from "@/lib/actions/getData";
import { ProductT } from "@/lib/types/productTypes";
import ProductCard from "../ui/Card/ProductCard";

export default async function CategoryProducts({
  params,
}: {
  params: {
    category: string;
  };
}) {
  let { category } = params;
  category = category.split("-").join(" ");

  const categoryProducts = await getData({
    endpoint: `products/category/${category}`,
  });

  if (!categoryProducts) {
    return <p>Products not found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {categoryProducts.map((product: ProductT, index: number) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}
