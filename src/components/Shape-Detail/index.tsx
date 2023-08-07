import React, { FC } from "react";
import {
  DetailsButtonContainer,
  Container,
  Detail,
  Header,
  ShapeAlterContainer
} from "./ShapeDetailStyles";

import { useAppDispatch } from "../../reduxApp/store";
import { OpenModal } from "@/reduxApp/features/ModalSlice/modalSlice";
import { Button } from "../Button";
import { IShapeDetailsProps } from "./ShapeDetail.type";
import { DeleteShape } from "../Delete-Shape";

export const ShapeDetails: FC<IShapeDetailsProps> = ({ detail, setDetail }) => {
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
      <DetailsButtonContainer>
        <Button
          onClick={() => dispatch(OpenModal())}
          bgcolor="rgba(235, 87, 87, 1)"
          label="+ Add a Shape"
        />
      </DetailsButtonContainer>
      <ShapeAlterContainer>
        <DeleteShape shapeName={detail.name} setDetail={setDetail} />
      </ShapeAlterContainer>
    </Container>
  );
};
