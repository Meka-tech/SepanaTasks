"use client";
import styles from "./page.module.css";
import { Shape, ShapeDetails, ShapeModal } from "@/components";
import { useAppSelector } from "../../src/reduxApp/store";
import { Key, useState } from "react";

export default function Home() {
  const shapes = useAppSelector((state) => state.shapes.shapeArray);
  const [activeShapeDetail, setActiveShapeDetail] = useState({
    name: "",
    x: 0,
    y: 0
  });

  type Shape = {
    name: string;
    width: number;
    height: number;
    xAxis: number;
    yAxis: number;
  };

  return (
    <main className={styles.main}>
      <ShapeDetails detail={activeShapeDetail} />
      <ShapeModal setHoverName={setActiveShapeDetail} />
      <div className={styles.shapeArea}>
        {shapes.map((shape: Shape, i: Key) => {
          return (
            <Shape
              setShapeDetail={setActiveShapeDetail}
              name={shape.name}
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
