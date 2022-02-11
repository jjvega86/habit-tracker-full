import { BackdropDiv } from "./Backdrop.styles";

export default function Backdrop({ children, onClick }) {
  return <BackdropDiv onClick={onClick}>{children}</BackdropDiv>;
}
