"use client";
import { device } from "@/app/deviceStyle";
import styled from "styled-components";

export const Container = styled.div`
  width: 22.4rem;
  height: 33.6rem;
  border: 1px solid rgba(241, 242, 244, 1);
  box-shadow: 0px 16px 24px 0px rgba(10, 31, 68, 0.08);
  position: absolute;
  bottom: 4%;
  right: 5%;
  border-radius: 8px;
  z-index: 5;
  background-color: white;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    height: 8rem;
    bottom: 0;
    right: 0;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(241, 242, 244, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  h1 {
    color: rgba(9, 72, 234, 1);
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Detail = styled(Header)`
  height: 15%;
  h2 {
    color: rgba(78, 93, 120, 1);
    font-weight: 500;
    font-size: 1.4rem;
  }
  @media ${device.tablet} {
    display: flex;
    height: 100%;
    border-right: 1px solid rgba(241, 242, 244, 1);
    width: 23%;
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const DetailsButtonContainer = styled.div`
  margin-top: 2rem;
  @media ${device.tablet} {
    margin: auto;
  }
`;
export const ShapeAlterContainer = styled.div`
  position: absolute;
  top: -15%;
  left: 10%;
  @media ${device.tablet} {
    top: -60%;
  }
`;
