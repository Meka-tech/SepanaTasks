"use client";
import styles from "./page.module.css";
import { Shape, ShapeDetails, ShapeModal } from "@/components";
import { useAppSelector } from "../../src/reduxApp/store";
import { Key } from "react";

export default function Home() {
  const shapes = useAppSelector((state) => state.shapes.shapeArray);
  console.log(shapes);
  return (
    <main className={styles.main}>
      <ShapeDetails />
      <ShapeModal />
      <div className={styles.shapeArea}>
        {shapes.map((shape: any, i: Key) => {
          return (
            <Shape
              key={i}
              width={shape.width}
              height={shape.height}
              xValue={shape.xAxis}
              yValue={shape.yAxis}
            />
          );
        })}
        {/* <Shape width={10} height={20} xValue={2} yValue={5} />
        <Shape width={30} height={20} xValue={5} yValue={8} /> */}
      </div>
    </main>
  );
}
