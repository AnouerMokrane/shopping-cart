import { useProductsStore } from "../store/useProductsStore";

type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItemToCart, cartItems, removeFromCart } = useProductsStore();
  const isItemExist = cartItems.find((item) => item.id === product.id);
  return (
    <div className="relative">
      <div>
        <img
          src={product.image}
          alt=""
          className="w-24 h-32 bg-cover mx-auto"
        />
      </div>
      <div className=" text-center">
        <p className="  line-clamp-1 my-4">{product.title} </p>
        <p className=" font-semibold text-2xl py-4">${product.price} </p>
        {isItemExist ? (
          <button
            className="w-full p-2 text-white bg-red-600 duration-300 hover:bg-red-500"
            onClick={() => removeFromCart(product.id)}
          >
            remove from cart
          </button>
        ) : (
          <button
            className="w-full p-2 text-white bg-black duration-300 hover:bg-yellow-600"
            onClick={() => addItemToCart({ ...product, quantity: 0 })}
          >
            Add to cart
          </button>
        )}
      </div>
      <span className="absolute top-0 right-0 text-[9px] bg-black p-1 text-white">
        {product.category}{" "}
      </span>
    </div>
  );
};

export default ProductCard;
