import React, { FC } from "react";
import { Container, Detail, Header } from "./styles";
import { DetailButton } from "./detailButton";
import { useAppDispatch } from "../../reduxApp/store";
import { OpenModal } from "@/reduxApp/features/ModalSlice/modalSlice";

interface IProps {
  detail: {
    name: string;
    x: number;
    y: number;
  };
}
export const ShapeDetails: FC<IProps> = ({ detail }) => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Header>
        <h1>Details</h1>
      </Header>
      <Detail>
        <h2>{detail.name === "" ? "--" : detail.name}</h2>
      </Detail>
      <Detail>
        <h2>Mouse X - {detail.name === "" ? "" : detail.x}</h2>
      </Detail>
      <Detail>
        <h2>Mouse Y - {detail.name === "" ? "" : detail.y}</h2>
      </Detail>
      <DetailButton onClick={() => dispatch(OpenModal())} />
    </Container>
  );
};
