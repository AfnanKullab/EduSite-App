import React from "react";
import * as S from "./style";
export function Button(props) {
  const { children, type } = props;
  return <S.MainButton type={type}>{children}</S.MainButton>;
}
export function SubmitBtn(props) {
  const { children, type } = props;
  return <S.SubmitBtn type={type}>{children}</S.SubmitBtn>;
}
