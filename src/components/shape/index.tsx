import React, { FC, useRef, useState, useEffect } from "react";
import { Container } from "./styles";

interface IShape {
  width: number;
  height: number;
  xValue: number;
  yValue: number;
  name: string;
  setShapeDetail: Function;
}
export const Shape: FC<IShape> = ({
  width,
  height,
  xValue,
  yValue,
  name,
  setShapeDetail
}) => {
  const shapeRef = React.createRef<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
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
    const shapeRect = shapeRef.current?.getBoundingClientRect(); //get Shape properties
    const squareX = shapeRect ? shapeRect?.left : 0; //get distance from left side of the screen to left of shape
    const squareY = shapeRect ? shapeRect?.top : 0; //get distance from top side of the screen to top of shape
    const squareHeight = shapeRect ? shapeRect?.height : 0; //shape height
    const x = mouseCoordinates.x - squareX;
    const y = -(mouseCoordinates.y - squareY) + squareHeight;
    if (hovered) {
      setShapeDetail({ name, x, y });
    }
  }, [
    hovered,
    mouseCoordinates.x,
    mouseCoordinates.y,
    name,
    setShapeDetail,
    shapeRef
  ]);

  return (
    <Container
      hovered={hovered.toString()}
      ref={shapeRef}
      width={width}
      height={height}
      top={yValue}
      left={xValue}
      onMouseMove={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    ></Container>
  );
};
