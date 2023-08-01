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
  const [hovered, setHovered] = useState(false);
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
    const squareY = squareRect?.top;
    const x = mouseCoordinates.x - squareX;
    const y = -(mouseCoordinates.y - squareY) + squareRect?.height;
    if (hovered) {
      setRelativeXaxis(x);
      setRelativeYaxis(y);
      setHoveredShapeName(name);
    } else {
      setHoveredShapeName("");
      setRelativeXaxis(0);
      setRelativeYaxis(0);
    }

    console.log(squareRect?.height);
  }, [mouseCoordinates]);

  return (
    <Container
      hovered={hovered}
      ref={targetREf}
      width={width}
      height={height}
      top={yValue}
      left={xValue}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseMove={() => {}}
      onMouseLeave={() => {
        setHovered(false);
      }}
    ></Container>
  );
};
