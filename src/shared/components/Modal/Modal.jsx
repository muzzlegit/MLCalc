import { createPortal } from "react-dom";
//STYLES
import { Backdrop, ModalBox } from "./styles/Modal.styled";
//ROOT
const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, onBackdropClick }) {
  return createPortal(
    <Backdrop
      id="backdrop"
      onClick={e => {
        onBackdropClick(e.target.id);
      }}
    >
      <ModalBox>{children}</ModalBox>
    </Backdrop>,
    modalRoot,
  );
}
