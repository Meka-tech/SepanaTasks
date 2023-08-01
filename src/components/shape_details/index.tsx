import React, { FC } from "react";
import { Container, Detail, Header } from "./styles";
import { DetailButton } from "./detailButton";
import { useAppDispatch } from "../../reduxApp/store";
import { OpenModal } from "@/reduxApp/features/ModalSlice/modalSlice";

interface IProps {
  originX?: string;
  originY?: string;
  shapeName: string;
}
export const ShapeDetails: FC<IProps> = ({ originX, originY, shapeName }) => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Header>
        <h1>Details</h1>
      </Header>
      <Detail>
        <h2>{shapeName === "" ? "--" : shapeName}</h2>
      </Detail>
      <Detail>
        <h2>Mouse X - {shapeName === "" ? "" : originX}</h2>
      </Detail>
      <Detail>
        <h2>Mouse Y - {shapeName === "" ? "" : originY}</h2>
      </Detail>
      <DetailButton onClick={() => dispatch(OpenModal())} />
    </Container>
  );
};
