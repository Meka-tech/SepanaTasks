import React, { FC } from "react";
import { IDeleteShapeProps } from "./DeleteShape.type";
import { useAppDispatch } from "@/reduxApp/store";
import { deleteShape } from "@/reduxApp/features/ShapeSlice/shapeSlice";
import { DeleteContainer } from "./DeleteShapeStyles";
import DeleteIcon from "../../../public/images/binIcon.png";
import Image from "next/image";

export const DeleteShape: FC<IDeleteShapeProps> = ({
  shapeName,
  setDetail
}) => {
  const dispatch = useAppDispatch();
  const DeleteShape = () => {
    dispatch(deleteShape(shapeName));
    setDetail({ name: "", x: 0, y: 0 });
  };

  return (
    <DeleteContainer shapename={shapeName}>
      <Image
        src={DeleteIcon}
        alt="deleteIcon"
        width={"40"}
        height={"40"}
        onClick={DeleteShape}
      />
    </DeleteContainer>
  );
};
