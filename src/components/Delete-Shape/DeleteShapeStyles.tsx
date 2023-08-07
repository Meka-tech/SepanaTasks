import styled from "styled-components";
import {
  IDeleteShapeContainerProps,
} from "./DeleteShape.type";

export const DeleteContainer = styled.div<IDeleteShapeContainerProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  transform: ${(props) =>
    props.shapename !== "" ? "translateY(0)" : "translateY(50%)"};
  opacity: ${(props) => (props.shapename !== "" ? "1" : "0")};
  
`;
