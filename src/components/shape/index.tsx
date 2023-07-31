import React, { FC, useRef, useState, useEffect } from "react";
import { Container } from "./styles";

interface IShape {
  width: number;
  height: number;
  xValue: number;
  yValue: number;
  name: string;
  setHoveredShapeName: Function;
  setRelativeXaxis: Function;
  setRelativeYaxis: Function;
}
export const Shape: FC<IShape> = ({
  width,
  height,
  xValue,
  yValue,
  name,
  setHoveredShapeName,
  setRelativeXaxis,
  setRelativeYaxis
}) => {
  const targetREf = useRef<HTMLDivElement>();
  const [relativeX, setRelativeX] = useState<number>(0);
  const [relativeY, setRelativeY] = useState<number>(0);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (event: { clientX: any; clientY: any }) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    const squareRect = targetREf.current?.getBoundingClientRect();
    const squareX = squareRect?.left;
    const squareY = squareRect?.bottom;
    const x = mouseCoordinates.x - squareX;
    const y = squareY - mouseCoordinates.y;
    setRelativeX(x);
    setRelativeY(y);
    console.log(squareRect, mouseCoordinates.x, mouseCoordinates.y);
  }, [mouseCoordinates]);

  return (
    <Container
      ref={targetREf}
      width={width}
      height={height}
      top={yValue}
      left={xValue}
      onMouseEnter={() => {
        setHoveredShapeName(name);
        setRelativeXaxis(relativeX);
        setRelativeYaxis(relativeY);
      }}
      onMouseLeave={() => {
        setHoveredShapeName("");
        setRelativeXaxis(0);
        setRelativeYaxis(0);
      }}
    ></Container>
  );
};
