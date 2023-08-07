import styled from "styled-components";
import { IButtonStyledProps } from "./Button.type";
import { device } from "@/app/deviceStyle";

export const ButtonContainer = styled.div<IButtonStyledProps>`
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "70%")};
  margin-left: auto;
  margin-right: auto;
  height: ${(props) => (props.height ? props.height : "5rem")};
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.1s;
  position: relative;

  h2 {
    color: white;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
  }
  @media ${device.tablet} {
    min-width: fit-content;
    padding: 0 1rem;
    height: 3rem;
    h2 {
      font-size: 1rem;
    }
  }
`;
