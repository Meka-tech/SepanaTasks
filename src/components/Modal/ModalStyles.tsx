"use client";
import { device } from "@/app/deviceStyle";
import styled from "styled-components";
import { ShadeStyleProps } from "./Modal.type";

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

export const Shade = styled.div<ShadeStyleProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(3, 11, 34, 0.2);
  top: 0;
  z-index: ${(props) => (props.open ? "200" : "-1")};
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
