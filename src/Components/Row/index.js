import React from "react";
import * as S from "./style";
export default function Row(props) {
  const { children } = props;
  return <S.Row>{children}</S.Row>;
}
