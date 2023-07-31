import React, { FC } from "react";
import { ButtonContainer } from "./styles";

interface IProps {
  onClick?: () => void;
}
export const DetailButton: FC<IProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <h2>+ Add a Shape</h2>
    </ButtonContainer>
  );
};
