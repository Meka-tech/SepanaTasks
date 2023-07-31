import React, { FC } from "react";
import { Container } from "./styles";

interface IShape {
  width: number;
  height: number;
  xValue: number;
  yValue: number;
}
export const Shape: FC<IShape> = ({
  width,
  height,
  xValue = 5,
  yValue = 5
}) => {
  return (
    <Container
      width={width}
      height={height}
      top={yValue}
      left={xValue}
    ></Container>
  );
};
