"use client";

import styled from "styled-components";

interface ContainerProps {
  height: number;
  width: number;
  top: number;
  left: number;
}
export const Container = styled.div<ContainerProps>`
  background-color: rgba(9, 72, 234, 0.2);
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  position: absolute;
  z-index: 8;
  cursor: pointer;
`;
