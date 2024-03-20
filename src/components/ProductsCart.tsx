import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useProductsStore } from "../store/useProductsStore";
import CartItem from "./CartItem";

const ProductsCart = () => {
  const { isCartOpen, closeCart, cartItems } = useProductsStore();
  const subTotal = cartItems.reduce(
    (acc, item) => (acc + item.price) * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div
      className={`flex flex-col  fixed right-0 w-full md:max-w-md bg-black h-full z-50 text-white  duration-300  ${
        isCartOpen ? "right-0" : "translate-x-[100%]"
      }`}
    >
      <button
        type="button"
        className=" absolute top-4 left-4 bg-white p-2 rounded-full"
        onClick={closeCart}
      >
        <IoMdClose className="text-2xl text-black" />
      </button>
      <div className="flex items-center gap-4 mt-16 mx-auto">
        <div className="relative">
          <FaCartShopping className="text-3xl" />
          <span className=" w-5 h-5 flex justify-center items-center absolute -top-2 -right-2  text-sm text-black bg-yellow-600 rounded-full">
            {totalQuantity}
          </span>
        </div>
        <p className="text-xl font-medium">Cart</p>
      </div>
      <div className="flex-1 flex flex-col gap-4 mt-10 px-6 pt-8 border-t border-gray-500 overflow-y-auto no-scrollbar">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} itemData={item} />)
        ) : (
          <span className="text-center">No Items in the cart</span>
        )}
      </div>
      <div className="flex justify-between items-center h-32 mt-12 px-6  border-t border-gray-500">
        <p className="text-gray-500">SUBTOTAL</p>
        <p className="text-2xl text-yellow-500">${subTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductsCart;
