
## To Install

To install this project , follow these steps:

1. **Clone the Repository:**
   Open your terminal or command prompt and navigate to the directory where you want to clone the project. Then, use the `git clone` command followed by the repository URL to clone the project.

   ```bash
   git clone [https://github.com/Meka-tech/SepanaTasks.git)]
   ```

2. **Install Dependencies:**
   After cloning the repository, navigate into the project directory using `cd`.

   ```bash
   cd repo-name
   ```

   Next, you need to install the project's dependencies using `npm` or `yarn`, depending on your package manager.

   For npm:

   ```bash
   npm install
   ```

   For yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server:**
   Once the dependencies are installed and environment variables (if any) are set up, you can start the Next.js development server.

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. **Open the Application:**
   After running the development server, open your web browser and go to `http://localhost:3000` to access the Next.js application.


### Link to live version

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

## Shape

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
};

```


## Shape Details
The ShapeDetails component represents a details panel that provides information about a custom shape. It receives the shape details as props and displays the shape's name, x-coordinate, and y-coordinate. Additionally, it includes a button to trigger the display of more detailed information in a modal.
The IProps interface defines the shape details as props, including the shape's name, x-coordinate, and y-coordinate.
The component uses the useAppDispatch hook from the Redux store to get the dispatch function, enabling it to dispatch actions to update the Redux store.
The component renders a Container element, representing the outer container of the shape details panel.
The Header component contains the title "Details" displayed at the top of the panel.
The Detail components display the shape details in separate sections. If the shape name is empty, the component shows "--" as a placeholder for the name.
The DetailButton is a button component that triggers the opening of a modal to show more details about the shape when clicked. It dispatches the OpenModal action from the ModalSlice reducer, which updates the state to indicate that the modal should be displayed.
This ShapeDetails component provides a concise and informative panel for displaying the essential details of a custom shape, making it a valuable addition to a larger application that deals with shape management and interactions.
```import React, { FC } from "react";
import { Container, Detail, Header } from "./styles";
import { DetailButton } from "./detailButton";
import { useAppDispatch } from "../../reduxApp/store";
import { OpenModal } from "@/reduxApp/features/ModalSlice/modalSlice";

/**
 * Represents the details panel for a custom shape.
 */
interface IProps {
  /** The details of the custom shape, including its name, x-coordinate, and y-coordinate. */
  detail: {
    name: string;
    x: number;
    y: number;
  };
}

/**
 * ShapeDetails Component
 *
 * @param {IProps} props - The props passed to the component.
 * @returns {JSX.Element} - The JSX representation of the ShapeDetails component.
 */
export const ShapeDetails: FC<IProps> = ({ detail }) => {
  const dispatch = useAppDispatch();

  return (
    /**
     * Container represents the outer container of the shape details panel.
     */
    <Container>
      {/* Header contains the title of the shape details panel. */}
      <Header>
        <h1>Details</h1>
      </Header>

      {/* Detail components display the shape details, including name, x-coordinate, and y-coordinate. */}
      <Detail>
        <h2>{detail.name === "" ? "--" : detail.name}</h2>
      </Detail>
      <Detail>
        <h2>Mouse X - {detail.name === "" ? "" : detail.x}</h2>
      </Detail>
      <Detail>
        <h2>Mouse Y - {detail.name === "" ? "" : detail.y}</h2>
      </Detail>

      {/* DetailButton is a button component that triggers the modal to show more details when clicked. */}
      <DetailButton onClick={() => dispatch(OpenModal())} />
    </Container>
  );
};
```




### Shape Modal
The ShapeModal component represents a modal for creating custom shapes. It allows users to input various details such as the shape's name, width, height, x-axis, and y-axis positions. The modal includes input fields, a close icon, and a button to create the shape with the provided details.
The IProps interface defines the props for the component, including the setHoverName function to cancel the hover effect when the mouse is over the modal.
The component uses useRef to create a reference to the modal's HTML element and useState to manage the state of the shape details.
It uses the useAppDispatch hook to get the dispatch function from the Redux store, allowing it to dispatch actions to update the state.
The CreateShape function is called when the user submits the shape details. It dispatches the addShapeToArray action to add the new shape to the array of shapes in the Redux store. After adding the shape, it resets the shapeDetail state and closes the modal using the CloseModal action.
The CloseModalFunction function is called when the user clicks outside the modal. It dispatches the CloseModal action to close the modal.
The useClickOutside custom hook is used to detect clicks outside the modal and trigger the CloseModalFunction to close the modal.
The component renders a Container element representing the outer container of the shape modal. When the mouse is over it, the setHoverName function is called to cancel the hover effect.
The White div acts as a backdrop and partially covers the screen when the modal is open. Clicking on it triggers the modal to open if it is not already open.
The Shade div represents the main content of the shape modal. It is shown when the modal is open.
The ModalHeader contains the title "Create shape" and a close icon that triggers the CloseModalFunction when clicked.
The ModalInputs section contains the input fields for shape details, including the name, height, width, x-axis, and y-axis.
The ModalButton is a button component that allows the user to submit the shape details, triggering the CreateShape function when clicked.
Overall, the ShapeModal component provides an intuitive and user-friendly interface for creating custom shapes with specific details using a modal. The integration with Redux enables seamless management of the shape data and UI state, enhancing the user experience in the larger application.

```
import React, { FC, useRef, useState } from "react";
import {
  Container,
  ModalContainer,
  ModalHeader,
  ModalInputGrid,
  ModalInputs,
  Shade,
  White
} from "./styles";
import CloseIcon from "../../../public/images/closeIcon.png";
import Image from "next/image";
import { ModalButton } from "./modalButton";
import { ModalInput } from "./modalInput";
import useClickOutside from "../../hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "../../reduxApp/store";
import { addShapeToArray } from "@/reduxApp/features/AddShape/shapeSlice";
import {
  OpenModal,
  CloseModal
} from "@/reduxApp/features/ModalSlice/modalSlice";

/**
 * Represents a modal component for creating custom shapes.
 */
interface IProps {
  /** A function to set the hover name to nothing and cancel the hover effect. */
  setHoverName: Function;
}

/**
 * ShapeModal Component
 *
 * @param {IProps} props - The props passed to the component.
 * @returns {JSX.Element} - The JSX representation of the ShapeModal component.
 */
export const ShapeModal: FC<IProps> = ({ setHoverName }) => {
  const childRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch = useAppDispatch();

  const [shapeDetail, setShapeDetail] = useState({
    name: "",
    width: "",
    height: "",
    xAxis: "",
    yAxis: ""
  });

  const modalOpen = useAppSelector((state) => state.modals.ModalOpen);

  /**
   * CreateShape function is called when the user submits the shape details.
   * It dispatches the addShapeToArray action to add the new shape to the array
   * of shapes in the Redux store.
   * It also resets the shapeDetail state and closes the modal.
   */
  const CreateShape = () => {
    if (
      shapeDetail.name &&
      shapeDetail.width &&
      shapeDetail.height &&
      shapeDetail.xAxis &&
      shapeDetail.yAxis
    ) {
      dispatch(
        addShapeToArray({
          name: shapeDetail.name,
          width: parseInt(shapeDetail.width),
          height: parseInt(shapeDetail.height),
          xAxis: parseInt(shapeDetail.xAxis),
          yAxis: parseInt(shapeDetail.yAxis)
        })
      );
      setShapeDetail({ name: "", width: "", height: "", xAxis: "", yAxis: "" });
      dispatch(CloseModal());
    }
  };

  /**
   * CloseModalFunction function is called when the user clicks outside the modal.
   * It dispatches the CloseModal action to close the modal.
   */
  const CloseModalFunction = () => {
    dispatch(CloseModal());
  };

  useClickOutside(childRef, CloseModalFunction);

  return (
    /**
     * Container represents the outer container of the shape modal.
     * It sets the hover name to nothing when the mouse is over it to cancel the hover effect.
     */
    <Container onMouseOver={() => setHoverName({ name: "", x: 0, y: 0 })}>
      {/* White div acts as a backdrop and partially covers the screen when the modal is open. */}
      <White
        onClick={() => {
          // Open the modal only if it is not already open
          !modalOpen && dispatch(OpenModal());
        }}
      />
      <Shade open={modalOpen}>
        {/* ModalContainer represents the main content of the shape modal. */}
        <ModalContainer ref={childRef}>
          {/* ModalHeader contains the title and close icon of the modal. */}
          <ModalHeader>
            <h1>Create shape</h1>

            {/* CloseIcon is a clickable icon to close the modal. */}
            <Image
              onClick={CloseModalFunction}
              src={CloseIcon}
              alt="close icon"
              width={"50"}
              height={"50"}
            />
          </ModalHeader>

          {/* ModalInputs contains the input fields for shape details. */}
          <ModalInputs>
            <ModalInput
              label="Name of Shape"
              placeholder="Enter shape name"
              onChange={(e) => {
                setShapeDetail({
                  ...shapeDetail,
                  name: e.target.value
                });
              }}
              value={shapeDetail.name.toString()}
            />
            <ModalInputGrid>
              <ModalInput
                label="Height"
                placeholder="Enter height"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    height: e.target.value
                  });
                }}
                value={shapeDetail.height}
              />
              <ModalInput
                label="Width"
                placeholder="Enter width"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    width: e.target.value
                  });
                }}
                value={shapeDetail.width}
              />
              <ModalInput
                label="X position"
                placeholder="Enter X value"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    xAxis: e.target.value
                  });
                }}
                value={shapeDetail.xAxis}
              />
              <ModalInput
                label="Y position"
                placeholder="Enter Y value"
                type="number"
                onChange={(e) => {
                  setShapeDetail({
                    ...shapeDetail,
                    yAxis: e.target.value
                  });
                }}
                value={shapeDetail.yAxis}
              />
            </ModalInputGrid>
          </ModalInputs>

          {/* ModalButton is a button component to submit the shape details. */}
          <ModalButton onClick={CreateShape} />
        </ModalContainer>
      </Shade>
    </Container>
  );
```

### Potential Extensions:

Shape Customization:
Enhance the application by allowing users to customize the appearance and properties of each shape further, such as color, border style, and rotation.

Multiple Shapes Support:
Extend the application to enable users to create and manage multiple shapes simultaneously, facilitating complex designs and layouts.

Save and Load Functionality:
Implement a feature to save and load previously created shapes, enabling users to revisit and modify their designs.

Responsive Design:
Ensure that the application is fully responsive, allowing users to create and interact with shapes on various devices, including desktops, tablets, and mobile phones.

Editing and Deleting Shapes:
Implement a feature to enable users to edit and/or delete already made shapes.

Authentication and User Accounts:
Add user authentication to enable users to save their projects and share them with others.





