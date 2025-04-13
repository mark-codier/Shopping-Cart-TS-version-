import { createContext } from "react";
import { item } from "./Reducers/shoppingCartReducer";

type CartContextType = {
  items: item[];
  addItemToCart: (id: string) => void;
  updateCartItemQuantity: (productId: string, amount: number) => void;
};
export const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});
