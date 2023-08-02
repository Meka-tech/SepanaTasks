
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [https://shape-creator.netlify.app]) with your browser to see the result.

## About Project

This professional project aims to empower users to create custom shapes by inputting essential parameters such as name, height, width, x-axis, and y-axis. Upon creation, the application allows users to interact with the shapes visually by hovering over them, providing real-time feedback on the relative x and y coordinates. The bottom left corner of each shape serves as the origin point for coordinate calculations.

Key Features:

Shape Creation:
Users can input the name, height, width, x-axis, and y-axis coordinates to define custom shapes tailored to their requirements. The application supports various geometric shapes, enabling versatility in design.

Interactive Hovering:
When users hover above the created shapes, the application dynamically displays the relative x and y coordinates. This feature offers immediate feedback, making it easier for users to position and understand the exact location of the shapes.

Coordinate Reference Point:
The bottom left corner of each shape serves as the origin point for the coordinate system. This reference point streamlines the coordinate calculations, ensuring consistency and ease of use for the users.

## Stacks used

Frontend Framework: Next.js with TypeScript
Next.js is a popular React framework that enables server-side rendering, automatic code splitting, and efficient routing. Combined with TypeScript, it provides enhanced type safety and development experience.

State Management: Redux
Redux is employed to manage the application's state, providing a predictable and centralized state container. With its unidirectional data flow and immutability, Redux simplifies state updates and ensures consistent data handling across components.

Styling: Styled-components
Styled-components is utilized for styling the frontend components. It allows writing CSS-in-JS, encapsulating styles within each component, which ensures better maintainability and modularity.

## Components

# Shape Detail

The Shape component is a custom shape creator that accepts various props to define the dimensions, position, and name of the shape. It provides real-time hovering interaction to display relative x and y coordinates as the user moves their mouse cursor over the shape.

The IShape interface defines the shape's properties, including width, height, x-axis, y-axis, name, and the setShapeDetail callback function to handle shape detail updates.
The component uses useRef to create a reference to the shape's HTML element to access its position.
It manages state using useState for the hovered state to determine whether the mouse cursor is over the shape, and mouseCoordinates to store the current mouse cursor coordinates.
useEffect is used to set up a mousemove event listener to update the mouseCoordinates state whenever the user moves their mouse cursor. It is also used to calculate the relative coordinates of the mouse cursor with respect to the shape and update the shape details when the mouse moves.
useCallback is utilized to memoize the handleShapeDetail function to prevent unnecessary re-renders.
The component renders a Container element, representing the shape. It uses onMouseMove and onMouseLeave events to update the hovered state based on whether the user hovers over or leaves the shape, respectively.
The handleShapeDetail function is called when the user hovers over the shape, and it updates the shape details only if the shape is hovered.
This Shape component can be used in a larger application for creating and interacting with custom shapes while getting real-time feedback on their relative coordinates.
```
import React, { FC, useRef, useState, useEffect, useCallback } from "react";
import { Container } from "./styles";

/**
 * Represents a custom shape component that allows users to create shapes
 * with specific dimensions and positions and provides real-time hover
 * interaction to get relative coordinates.
 */
interface IShape {
  /** The width of the shape. */
  width: number;
  /** The height of the shape. */
  height: number;
  /** The x-axis coordinate value of the shape. */
  xValue: number;
  /** The y-axis coordinate value of the shape. */
  yValue: number;
  /** The name of the shape. */
  name: string;
  /**
   * A callback function to set the shape details, including the name and
   * the relative x and y coordinates.
   */
  setShapeDetail: Function;
}

/**
 * Shape Component
 *
 * @param {IShape} props - The props passed to the component.
 * @returns {JSX.Element} - The JSX representation of the shape component.
 */
export const Shape: FC<IShape> = ({
  width,
  height,
  xValue,
  yValue,
  name,
  setShapeDetail,
}) => {
  const shapeRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  /**
   * useEffect hook to set up the mousemove event listener and clean up
   * the listener on component unmount.
   */
  useEffect(() => {
    const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
      setMouseCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  /**
   * useCallback hook to handle updating the shape details when the user hovers
   * over the shape.
   * @param {string} name - The name of the shape.
   * @param {number} x - The relative x-coordinate of the mouse cursor with
   *                      respect to the shape.
   * @param {number} y - The relative y-coordinate of the mouse cursor with
   *                      respect to the shape.
   */
  const handleShapeDetail = useCallback(
    (name: string, x: number, y: number) => {
      if (hovered) {
        setShapeDetail({ name, x, y });
      }
    },
    [hovered, setShapeDetail]
  );

  /**
   * useEffect hook to calculate the relative coordinates of the mouse cursor
   * with respect to the shape and update the shape details when the mouse moves.
   */
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
    /**
     * Container represents the custom shape and handles hover events.
     * onMouseMove and onMouseLeave events trigger state updates for the hovered value.
     */
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
};```





