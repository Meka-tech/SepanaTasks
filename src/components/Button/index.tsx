import React, { FC } from "react";
import { IButtonProps } from "./Button.type";
import { ButtonContainer } from "./ButtonStyles";

export const Button: FC<IButtonProps> = ({
  onClick,
  bgcolor,
  label,
  width,
  height
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      bgcolor={bgcolor}
      width={width}
      height={height}
    >
      <h2>{label}</h2>
    </ButtonContainer>
  );
};
