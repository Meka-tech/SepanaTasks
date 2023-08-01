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
import {
  OpenModal,
  CloseModal
} from "@/reduxApp/features/ModalSlice/modalSlice";

interface IProps {}

export const ShapeModal: FC<IProps> = ({}) => {
  const childRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch = useAppDispatch();
 
  const [shapeDetail, setShapeDetail] = useState({
    name: "",
    width: "",
    height: "",
    xAxis: "",
    yAxis: ""
  });

  const modalOpen = useAppSelector((state) => state.modals.ModalOpen);
  const CreateShape = () => {
    if (
      (shapeDetail.name,
      shapeDetail.width,
      shapeDetail.height,
      shapeDetail.xAxis,
      shapeDetail.yAxis)
    ) {
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
      dispatch(CloseModal());
    }
  };
  const CloseModalFunction = () => {
    dispatch(CloseModal());
  };
  useClickOutside(childRef, CloseModalFunction);
  return (
    <Container>
      <White
        onClick={() => {
          !modalOpen && dispatch(OpenModal());
        }}
      />
      <Shade modalOpen={modalOpen}>
        <ModalContainer ref={childRef}>
          <ModalHeader>
            <h1>Create shape</h1>

            <Image
              onClick={CloseModalFunction}
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
