import { DUMMY_PRODUCTS } from "../../dummy-product";

type AddItemAction = {
  type: "ADD_ITEM";
  data: { id: string };
};

type UpdateItemAction = {
  type: "UPDATE_ITEM";
  data: { productId: string; amount: number };
};

type Action = AddItemAction | UpdateItemAction;

export type item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type State = {
  items: item[];
};

function shoppingCartReducer(state: State, { type, data }: Action) {
  switch (type) {
    case "ADD_ITEM":
      {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === data.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find(
            (product) => product.id === data.id
          );
          if (product) {
            updatedItems.push({
              id: data.id,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
        }
        return {
          items: updatedItems,
        };
      }
      break;
    case "UPDATE_ITEM":
      {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === data.productId
        );

        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += data.amount;

        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
        return {
          items: updatedItems,
        };
      }
      break;
    default:
      return state;
  }
}
export default shoppingCartReducer;
