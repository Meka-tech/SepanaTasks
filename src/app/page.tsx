"use client";
import styles from "./page.module.css";
import { Shape, ShapeDetails, ShapeModal } from "@/components";
import { useAppSelector } from "../../src/reduxApp/store";
import { Key, useEffect, useState } from "react";

export default function Home() {
  const shapes = useAppSelector((state) => state.shapes.shapeArray);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredShapeName, setHoveredShapeName] = useState("");
  const [relativeXaxis, setRelativeXaxis] = useState();
  const [relativeYaxis, setRelativeYaxis] = useState();

  return (
    <main className={styles.main}>
      <ShapeDetails
        setModalOpen={setModalOpen}
        shapeName={hoveredShapeName}
        originX={relativeXaxis}
        originY={relativeYaxis}
      />
      <ShapeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={styles.shapeArea}>
        {shapes.map((shape: any, i: Key) => {
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
