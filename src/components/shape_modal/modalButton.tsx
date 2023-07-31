import React, { FC } from "react";
import { ButtonContainer } from "./styles";

interface IProps {
  onClick?: () => void;
}
export const ModalButton: FC<IProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <h2>Create New Shape</h2>
    </ButtonContainer>
  );
};
