import React from "react";
import * as S from "./style";

export const H1 = (props) => {
  const { children } = props;
  return <S.H1>{children}</S.H1>;
};
export const H2 = (props) => {
  const { children } = props;
  return <S.H2>{children}</S.H2>;
};
export const H3 = (props) => {
  const { children } = props;
  return <S.H3>{children}</S.H3>;
};
export const H4 = (props) => {
  const { children } = props;
  return <S.H4>{children}</S.H4>;
};
export const P = (props) => {
  const { children } = props;
  return <S.P>{children}</S.P>;
};
export const FeatureP = (props) => {
  const { children } = props;
  return <S.FeatureP>{children}</S.FeatureP>;
};
