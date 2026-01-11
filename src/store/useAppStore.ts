import { create } from "zustand";
import { productsDummyData, userDummyData } from "@/assets/assets";
import type { Product, User } from "@/types";

type CartItems = Record<string, number>;

type AppStore = {
  currency?: string;

  // state
  products: Product[];
  userData: User | null;
  isSeller: boolean;
  cartItems: CartItems;

  // actions
  fetchProductData: () => void;
  fetchUserData: () => void;

  setIsSeller: (value: boolean) => void;

  addToCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;

  // selectors / helpers
  getCartCount: () => number;
  getCartAmount: () => number;
};

export const useAppStore = create<AppStore>((set, get) => ({
  currency: '$',

  // State
  products: [],
  userData: null,
  isSeller: true,
  cartItems: {},

  // Data loaders
  fetchProductData: () => {
    set({ products: productsDummyData });
  },

  fetchUserData: () => {
    set({
      userData: userDummyData,
      cartItems: userDummyData.cartItems ?? {},
    });
  },

  // UI state
  setIsSeller: (value) => set({ isSeller: value }),


  // Cart actions
  addToCart: (itemId) =>
    set((state) => ({
      cartItems: {
        ...state.cartItems,
        [itemId]: (state.cartItems[itemId] ?? 0) + 1,
      },
    })),

  updateCartQuantity: (itemId, quantity) =>
    set((state) => {
      const updated = { ...state.cartItems };

      if (quantity <= 0) delete updated[itemId];
      else updated[itemId] = quantity;

      return { cartItems: updated };
    }),

  clearCart: () => set({ cartItems: {} }),

  // Helpers
  getCartCount: () => {
    const cart = get().cartItems;
    return Object.values(cart).reduce((sum, q) => sum + q, 0);
  },

  getCartAmount: () => {
    const { cartItems, products } = get();

    const total = Object.entries(cartItems).reduce(
      (sum, [id, qty]) => {
        const product = products.find((p) => p._id === id);
        if (!product) return sum;
        return sum + product.offerPrice * qty;
      },
      0
    );

    return Math.floor(total * 100) / 100;
  },
}));
