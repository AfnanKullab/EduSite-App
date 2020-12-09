import React from "react";
import * as S from "./style";
export default function Button(props) {
  const { children, type } = props;
  return <S.MainButton type={type}>{children}</S.MainButton>;
}
