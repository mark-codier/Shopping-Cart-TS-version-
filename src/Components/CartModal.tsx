import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

type ModalProps = {
  title: string;
  actions: React.ReactElement;
};

export type ModalHandle = {
  open: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(({ title, actions }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current?.showModal();
    },
  }));

  const portalRoot = document.getElementById('modal');
  if (!portalRoot) return null;

  return createPortal(
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog">
        {actions}
      </form>
    </dialog>,
    portalRoot
  );
});

export default Modal;
