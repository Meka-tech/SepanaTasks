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
  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}rem`};
  top: ${(props) => `${props.top}rem`};
  left: ${(props) => `${props.left}rem`};
  position: absolute;
`;
