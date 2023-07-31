import React, { FC, InputHTMLAttributes } from "react";
import { Input, InputBody, InputContainer, InputLabel } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const ModalInput: FC<IProps> = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBody>
        <Input {...rest} />
      </InputBody>
    </InputContainer>
  );
};
