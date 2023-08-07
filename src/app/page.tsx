"use client";
import styles from "./page.module.css";
import { Modal, Shape, ShapeDetails } from "@/components";
import { useAppSelector } from "../../src/reduxApp/store";
import { Key, useState, useEffect } from "react";
import { IShapeDrawing } from "@/components/Shape/Shape.types";

export default function Home() {
  const shapes = useAppSelector((state) => state.shapes.shapeArray);
  const [activeShapeDetail, setActiveShapeDetail] = useState({
    name: "",
    x: 0,
    y: 0
  });

  return (
    <main className={styles.main}>
      <ShapeDetails
        detail={activeShapeDetail}
        setDetail={setActiveShapeDetail}
      />
      <Modal />
      <div className={styles.shapeArea}>
        {shapes.map((shape: IShapeDrawing, i: Key) => {
          return (
            <>
              <Shape
                setShapeDetail={setActiveShapeDetail}
                name={shape.name}
                key={i}
                width={shape.width}
                height={shape.height}
                xValue={shape.xAxis}
                yValue={shape.yAxis}
              />
            </>
          );
        })}
      </div>
    </main>
  );
}
