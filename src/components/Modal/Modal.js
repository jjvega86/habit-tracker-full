import Backdrop from "../Backdrop/Backdrop";
import { ModalDiv } from "./Modal.styles";

export default function Modal({ handleClose, text, children }) {
  return (
    <Backdrop onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
        {children}
      </ModalDiv>
    </Backdrop>
  );
}
