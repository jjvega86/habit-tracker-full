import { Button } from "./HabitButton.styles";

interface HabitButtonProps {
  buttonType: string;
}

export default function HabitButton({ buttonType }: HabitButtonProps) {
  let buttonText = buttonType.toLocaleUpperCase();
  return <Button buttonType={buttonType}>{buttonText}</Button>;
}
