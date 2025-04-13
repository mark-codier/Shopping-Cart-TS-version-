import { useRef,useContext } from 'react';

import CartModal, { ModalHandle } from './CartModal.tsx'

import { CartContext } from '../store/shopping-card-context.js';

export default function Header() {
  const modal = useRef<ModalHandle>(null);
  const cart = useContext(CartContext)
  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    console.log('Open')
    modal.current?.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
