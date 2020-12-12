import React from "react";
import * as S from "./style";
export default function Input(props) {
  const { type, name, value, placeholder, handleChange, errors } = props;

  return (
    <S.Input
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      error={errors}
    />
  );
}
