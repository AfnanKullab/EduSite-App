import React from "react";
import * as S from "./style";

export default function TextArea(props) {
  const { name, placeholder } = props;
  return <S.TextArea name={name} placeholder={placeholder}></S.TextArea>;
}
