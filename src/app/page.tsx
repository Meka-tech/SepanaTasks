"use client";
import styles from "./page.module.css";
import { Shape, ShapeDetails, ShapeModal } from "@/components";
import { useAppSelector } from "../../src/reduxApp/store";
import { Key, useEffect, useState } from "react";

export default function Home() {
  const shapes = useAppSelector((state) => state.shapes.shapeArray);
  const [hoveredShapeName, setHoveredShapeName] = useState("");
  const [relativeXaxis, setRelativeXaxis] = useState();
  const [relativeYaxis, setRelativeYaxis] = useState();

  type Shape = {
    name: string;
    width: number;
    height: number;
    xAxis: number;
    yAxis: number;
  };

  return (
    <main className={styles.main}>
      <ShapeDetails
        shapeName={hoveredShapeName}
        originX={relativeXaxis}
        originY={relativeYaxis}
      />
      <ShapeModal />
      <div className={styles.shapeArea}>
        {shapes.map((shape: Shape, i: Key) => {
          return (
            <Shape
              setRelativeXaxis={setRelativeXaxis}
              setRelativeYaxis={setRelativeYaxis}
              name={shape.name}
              setHoveredShapeName={setHoveredShapeName}
              key={i}
              width={shape.width}
              height={shape.height}
              xValue={shape.xAxis}
              yValue={shape.yAxis}
            />
          );
        })}
      </div>
    </main>
  );
}
