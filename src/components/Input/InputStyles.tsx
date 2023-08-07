import { device } from "@/app/deviceStyle";
import styled from "styled-components";

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
