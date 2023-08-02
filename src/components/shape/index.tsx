import React, { FC, useRef, useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
      setMouseCoordinates({
        x: event.clientX,
        y: event.clientY
      });
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const handleShapeDetail = useCallback(
    (name: string, x: number, y: number) => {
      if (hovered) {
        setShapeDetail({ name, x, y });
      }
    },
    [hovered, setShapeDetail]
  );
  useEffect(() => {
    const shapeRect = shapeRef.current?.getBoundingClientRect();
    const squareX = shapeRect ? shapeRect?.left : 0;
    const squareY = shapeRect ? shapeRect?.top : 0;
    const squareHeight = shapeRect ? shapeRect?.height : 0;
    const x = mouseCoordinates.x - squareX;
    const y = -(mouseCoordinates.y - squareY) + squareHeight;

    // Call the function instead of updating the state directly
    handleShapeDetail(name, x, y);
  }, [hovered, mouseCoordinates, name, shapeRef]);
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
