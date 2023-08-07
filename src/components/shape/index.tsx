import React, { FC, useState, useEffect, useCallback } from "react";
import { ShapeContainer } from "./ShapeStyles";
import { IShapeProps } from "./Shape.types";

export const Shape: FC<IShapeProps> = ({
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
  const [countdown, setCountdown] = useState(6);

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
      setShapeDetail({ name, x, y });
    },
    [setShapeDetail]
  );

  const GetShapeDetail = () => {
    setHovered(true);
    const shapeRect = shapeRef.current?.getBoundingClientRect();
    const squareX = shapeRect ? shapeRect?.left : 0;
    const squareY = shapeRect ? shapeRect?.top : 0;
    const squareHeight = shapeRect ? shapeRect?.height : 0;
    const x = mouseCoordinates.x - squareX;
    const y = -(mouseCoordinates.y - squareY) + squareHeight;
    handleShapeDetail(name, x, y);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!hovered) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      setCountdown(5);
    }

    if (countdown === 0) {
      handleShapeDetail("", 0, 0);
    }
    return () => {
      clearInterval(timer);
    };
  }, [hovered, countdown, handleShapeDetail]);
  return (
    <ShapeContainer
      hovered={hovered.toString()}
      ref={shapeRef}
      width={width}
      height={height}
      top={yValue}
      left={xValue}
      onMouseMove={(e) => {
        GetShapeDetail();
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    ></ShapeContainer>
  );
};
