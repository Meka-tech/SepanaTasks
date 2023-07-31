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

interface IProps {
  modalOpen: boolean;
  setModalOpen: Function;
}
export const ShapeModal: FC<IProps> = ({ modalOpen, setModalOpen }) => {
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
  const [shapeDetail, setShapeDetail] = useState({
    name: "",
    width: "",
    height: "",
    xAxis: "",
    yAxis: ""
  });

  const CreateShape = () => {
    dispatch(
      addShapeToArray({
        name: shapeDetail.name,
        width: parseInt(shapeDetail.width),
        height: parseInt(shapeDetail.height),
        xAxis: parseInt(shapeDetail.xAxis),
        yAxis: parseInt(shapeDetail.yAxis)
      })
    );
    setShapeDetail({ name: "", width: "", height: "", xAxis: "", yAxis: "" });
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
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    height: e.target.value
                  });
                }}
                value={shapeDetail.height}
              />
              <ModalInput
                label="Width"
                placeholder="Enter width"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    width: e.target.value
                  });
                }}
                value={shapeDetail.width}
              />
              <ModalInput
                label="X position"
                placeholder="Enter X value"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    xAxis: e.target.value
                  });
                }}
                value={shapeDetail.xAxis}
              />
              <ModalInput
                label="Y position"
                placeholder="Enter Y value"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    yAxis: e.target.value
                  });
                }}
                value={shapeDetail.yAxis}
              />
            </ModalInputGrid>
          </ModalInputs>
          <ModalButton onClick={CreateShape} />
        </ModalContainer>
      </Shade>
    </Container>
  );
};
