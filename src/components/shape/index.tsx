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
  const shapeRef = useRef<HTMLDivElement>();
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
    const squareRect = shapeRef.current?.getBoundingClientRect();
    const squareX = squareRect ? squareRect?.left : 0;
    const squareY = squareRect ? squareRect?.top : 0;
    const squareHeight = squareRect ? squareRect?.height : 0;
    const x = mouseCoordinates.x - squareX;
    const y = -(mouseCoordinates.y - squareY) + squareHeight;
    if (hovered) {
      setRelativeXaxis(x);
      setRelativeYaxis(y);
      setHoveredShapeName(name);
    } else {
      setHoveredShapeName("");
      setRelativeXaxis(0);
      setRelativeYaxis(0);
    }
  }, [
    hovered,
    mouseCoordinates,
    name,
    setHoveredShapeName,
    setRelativeXaxis,
    setRelativeYaxis
  ]);

  return (
    <Container
      hovered={hovered}
      ref={shapeRef}
      width={width}
      height={height}
      top={yValue}
      left={xValue}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseMove={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    ></Container>
  );
};
