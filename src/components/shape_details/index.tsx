import React, { FC } from "react";
import { Container, Detail, Header } from "./styles";
import { DetailButton } from "./detailButton";

interface IProps {
  originX?: string;
  originY?: string;
  shapeName: string;
  setModalOpen: Function;
}
export const ShapeDetails: FC<IProps> = ({
  originX,
  originY,
  setModalOpen,
  shapeName
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
        <h2>Mouse X - {originX}</h2>
      </Detail>
      <Detail>
        <h2>Mouse Y - {originY}</h2>
      </Detail>
      <DetailButton onClick={() => setModalOpen(true)} />
    </Container>
  );
};
