import Backdrop from "../Backdrop/Backdrop";
import { ModalDiv } from "./Modal.styles";

export default function Modal({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
        <button onClick={handleClose}>Close Modal</button>
      </ModalDiv>
    </Backdrop>
  );
}
