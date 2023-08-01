"use client";
import { device } from "@/app/deviceStyle";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;
export const White = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
`;
interface ShadeProps {
  open?: boolean;
}
export const Shade = styled.div<ShadeProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(3, 11, 34, 0.2);
  top: 0;
  z-index: ${(props) => (props.open ? "10" : "-1")};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all ease 0.1s;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 60rem;
  height: 55rem;
  max-width: 80%;
  @media ${device.tablet} {
    height: 45rem;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 3rem;
  border-bottom: 1px solid rgba(241, 242, 244, 1);
  position: relative;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    margin-left: 2rem;
    margin-top: 2rem;
    color: black;
    font-size: 2.8rem;
  }
  img {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  @media ${device.tablet} {
    padding: 1.5rem;

    h1 {
      margin-left: 1rem;
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }
`;

export const ModalInputs = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4rem 5rem;
  padding-bottom: 3rem;
  @media ${device.tablet} {
    padding: 2.5rem;
    padding-bottom: 1.5rem;
  }
`;
export const ModalInputGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonContainer = styled.div`
  background-color: rgba(9, 72, 234, 1);
  cursor: pointer;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 5rem;
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
    font-weight: 600;
  }
  @media ${device.tablet} {
    height: 4rem;
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
export const InputLabel = styled.h2`
  color: rgba(78, 93, 120, 1);
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 5px;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export const InputBody = styled.div`
  width: 100%;
  box-shadow: 0px 2px 2px 0px rgba(10, 31, 68, 0.12) inset;
  border: 1px solid rgba(241, 242, 244, 1);
  height: 5rem;
  border-radius: 6px;
  background-color: rgba(241, 242, 244, 1);
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    height: 4rem;
  }
`;

export const Input = styled.input`
  width: 96%;
  height: 100%;
  margin-left: auto;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: black;
  line-height: 2.4rem;
  :focus {
    border: none;
  }
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;
