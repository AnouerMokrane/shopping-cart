import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import useGetProducts from "./hooks/useGetProducts";
import ProductCard from "./components/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEffect, useState } from "react";
import { useProductsStore } from "./store/useProductsStore";

type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const App = () => {
  const { data: products, isLoading } = useGetProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { cartItems } = useProductsStore();

  const filteredProducts =
    products &&
    products.filter(
      (product: IProduct) => product.category === selectedCategory
    );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-16 mx-6 py-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="relative grid grid-cols-2 gap-10 lg:grid-cols-3">
          {isLoading ? (
            <LoadingSpinner />
          ) : selectedCategory === "all" ? (
            products.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            filteredProducts.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
