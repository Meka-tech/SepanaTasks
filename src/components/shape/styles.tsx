"use client";

import { device } from "@/app/deviceStyle";
import styled from "styled-components";

interface ContainerProps {
  height: number;
  width: number;
  top: number;
  left: number;
  hovered: string;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.hovered ? "rgba(9, 72, 234, 0.5)" : "rgba(9, 72, 234, 0.2)"};
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  border: ${(props) =>
    props.hovered === "true" ? "1px solid rgba(9, 72, 234, 1)" : ""};
  position: absolute;
  z-index: ${(props) => (props.hovered === "true" ? "100" : "8")};
  cursor: pointer;
  transition: all 0.2s ease;
  @media ${device.tablet} {
    height: ${(props) => `${props.height / 4}px`};
    width: ${(props) => `${props.width / 4}px`};
    top: ${(props) => `${props.top / 4}px`};
    left: ${(props) => `${props.left / 4}px`};
  }
`;
