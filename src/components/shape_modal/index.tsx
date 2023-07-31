"use client";
import React, { FC, useRef, useState } from "react";
import {
  Container,
  ModalContainer,
  ModalHeader,
  ModalInputGrid,
  ModalInputs,
  Shade,
  White
} from "./styles";
import CloseIcon from "../../../public/images/closeIcon.png";
import Image from "next/image";
import { ModalButton } from "./modalButton";
import { ModalInput } from "./modalInput";
import useClickOutside from "../../hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "../../reduxApp/store";
import { addShapeToArray } from "@/reduxApp/features/AddShape/shapeSlice";

interface IProps {}
export const ShapeModal: FC<IProps> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const childRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useClickOutside(childRef, () => setModalOpen(false));
  const dispatch = useAppDispatch();
  type Shape = {
    name: string;
    width: number;
    height: number;
    xAxis: number;
    yAxis: number;
  };
  const [shapeDetail, setShapeDetail] = useState<Shape>({
    name: "",
    width: 0,
    height: 0,
    xAxis: 0,
    yAxis: 0
  });

  const CreateShape = () => {
    dispatch(addShapeToArray(shapeDetail));
    setShapeDetail({ name: "", width: 0, height: 0, xAxis: 0, yAxis: 0 });
    setModalOpen(false);
  };

  return (
    <Container>
      <White
        onClick={() => {
          !modalOpen && setModalOpen(true);
        }}
      />
      <Shade modalOpen={modalOpen}>
        <ModalContainer ref={childRef}>
          <ModalHeader>
            <h1>Create shape</h1>

            <Image
              onClick={() => setModalOpen(false)}
              src={CloseIcon}
              alt="close icon"
              width={"50"}
              height={"50"}
            />
          </ModalHeader>
          <ModalInputs>
            <ModalInput
              label="Name of Shape"
              placeholder="Enter shape name"
              onChange={(e) => {
                setShapeDetail({
                  ...shapeDetail,
                  name: e.target.value
                });
              }}
              value={shapeDetail.name.toString()}
            />
            <ModalInputGrid>
              <ModalInput
                label="Height"
                placeholder="Enter height"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    height: parseInt(e.target.value)
                  });
                }}
                value={shapeDetail.height.toString()}
              />
              <ModalInput
                label="Width"
                placeholder="Enter width"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    width: parseInt(e.target.value)
                  });
                }}
                value={shapeDetail.width.toString().toString()}
              />
              <ModalInput
                label="X position"
                placeholder="Enter X value"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    xAxis: parseInt(e.target.value)
                  });
                }}
                value={shapeDetail.xAxis.toString()}
              />
              <ModalInput
                label="Y position"
                placeholder="Enter Y value"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    yAxis: parseInt(e.target.value)
                  });
                }}
                value={shapeDetail.yAxis.toString()}
              />
            </ModalInputGrid>
          </ModalInputs>
          <ModalButton onClick={CreateShape} />
        </ModalContainer>
      </Shade>
    </Container>
  );
};
