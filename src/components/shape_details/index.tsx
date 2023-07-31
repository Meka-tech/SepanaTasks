import React, { FC } from "react";
import { Container, Detail, Header } from "./styles";
import { DetailButton } from "./detailButton";

interface IProps {
  onClick?: () => void;
  shapeName?: string;
  MouseX?: number;
  MouseY?: number;
}
export const ShapeDetails: FC<IProps> = ({
  onClick,
  shapeName = "",
  MouseX,
  MouseY
}) => {
  return (
    <Container>
      <Header>
        <h1>Details</h1>
      </Header>
      <Detail>
        <h2>{shapeName === "" ? "--" : shapeName}</h2>
      </Detail>
      <Detail>
        <h2>Mouse X - {MouseX}</h2>
      </Detail>
      <Detail>
        <h2>Mouse Y - {MouseY}</h2>
      </Detail>
      <DetailButton onClick={onClick} />
    </Container>
  );
};
