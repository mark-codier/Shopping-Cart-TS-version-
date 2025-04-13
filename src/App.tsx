import { useReducer } from "react";
import shoppingCartReducer from "./store/Reducers/shoppingCartReducer";

import Product from './Components/Product.tsx';
import Header from './Components/Header.tsx';
import Shop from './Components/Shop.tsx';
import { DUMMY_PRODUCTS } from "./dummy-product.tsx";
import { CartContext } from "./store/shopping-card-context.ts";

function App() {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );
  function handleAddItemToCart(id: string) {
    shoppingCartDispatch({
      type /*or identifier*/: "ADD_ITEM",
      data /*payload*/: { id },
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      data: { amount, productId },
    });
  }
  const contextValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity:handleUpdateCartItemQuantity 
  }
  return <>
  <CartContext.Provider value={contextValue}>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider></>;
}

export default App;
