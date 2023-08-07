import React, { FC } from "react";
import { Input, InputBody, InputContainer, InputLabel } from "./InputStyles";
import { IInputProps } from "./Input.type";

export const InputComponent: FC<IInputProps> = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBody>
        <Input {...rest} />
      </InputBody>
    </InputContainer>
  );
};
