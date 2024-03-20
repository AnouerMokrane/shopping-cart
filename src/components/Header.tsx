import { TbBrandGithubFilled } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";

import ProductsCart from "./ProductsCart";
import { useProductsStore } from "../store/useProductsStore";

const Header = () => {
  const { openCart, cartItems } = useProductsStore();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-between h-28 sticky top-0 z-[1111]">
      <a
        href="https://github.com/AnouerMokrane"
        target="_blank"
        className="bg-black w-16 h-44 mt-6 rotate-45 relative -top-28"
      >
        <TbBrandGithubFilled className="text-3xl text-white absolute bottom-[35px] -right-1 -translate-y-1/2 -rotate-90" />
      </a>
      <button
        className="relative bg-black w-14 h-14 flex justify-center items-center"
        onClick={openCart}
      >
        <FaCartShopping className="text-white text-2xl" />
        <span className=" absolute top-2 right-2 w-5 h-5 text-sm bg-yellow-600 rounded-full">
          {totalQuantity}
        </span>
      </button>
      <ProductsCart />
    </div>
  );
};

export default Header;
