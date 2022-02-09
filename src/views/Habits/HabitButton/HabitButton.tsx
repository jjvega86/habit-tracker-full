import * as React from "react";
import { Button } from "./HabitButton.styles";

interface HabitButtonProps {
  buttonType: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function HabitButton({
  buttonType,
  clickHandler,
}: HabitButtonProps) {
  let buttonText = buttonType.toLocaleUpperCase();
  return (
    <Button type="submit" onClick={clickHandler} buttonType={buttonType}>
      {buttonText}
    </Button>
  );
}
