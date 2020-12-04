import React from "react";
import * as S from "./style";
export default function Button(props) {
  const { children } = props;
  return <S.MainButton>{children}</S.MainButton>;
}
