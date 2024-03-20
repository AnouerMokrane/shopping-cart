import { useProductsStore } from "../store/useProductsStore";

type ICartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

type CartItemProps = {
  itemData: ICartItem;
};

const CartItem = ({ itemData }: CartItemProps) => {
  const { removeFromCart, addItemToCart, decreaseQuantity } =
    useProductsStore();

  return (
    <div className="flex items-center relative">
      <img src={itemData.image} alt="" className="w-16 h-24 mr-4" />
      <div>
        <p className="text-sm">{itemData.title} </p>
        <span className="text-xs text-gray-400">{itemData.category} </span>
        <p className="text-sm text-gray-400">Quantity: {itemData.quantity} </p>
      </div>
      <div className="ms-auto">
        <p className="text-yellow-400">${itemData.price} </p>
        <div className=" flex justify-center mt-2">
          <button
            type="button"
            className="w-5 h-5 flex justify-center items-center bg-gray-900"
            onClick={() => decreaseQuantity(itemData.id)}
          >
            -
          </button>
          <button
            type="button"
            className="w-5 h-5 flex justify-center items-center bg-gray-900"
            onClick={() => addItemToCart(itemData)}
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        className=" absolute top-0 right-0"
        onClick={() => removeFromCart(itemData.id)}
      >
        x
      </button>
    </div>
  );
};

export default CartItem;
