import { create } from "zustand";

type ICartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

type State = {
  isCartOpen: boolean;
  cartItems: ICartItem[];
};

type Actions = {
  openCart: () => void;
  closeCart: () => void;
  addItemToCart: (product: ICartItem) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

export const useProductsStore = create<State & Actions>((set) => ({
  isCartOpen: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  openCart: () => set(() => ({ isCartOpen: true })),
  closeCart: () => set(() => ({ isCartOpen: false })),
  addItemToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) => {
            return item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      }

      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (produtId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== produtId),
    })),
  decreaseQuantity: (productId) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return {
            cartItems: state.cartItems.map((item) => {
              return item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item;
            }),
          };
        }
      }
      return {
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };
    }),
}));
