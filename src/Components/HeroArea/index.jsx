import React from "react";
import List from "../ListHeroArea";
import * as S from "./style";
import * as T from "../Typography";

export default function HeroArea() {
  return (
    <S.HeroAreaSection>
      <S.HeroAreaBG />
      <S.Container>
        <S.Row>
          <List subTitle="Contact" />
          <T.H1>Get In Touch</T.H1>
        </S.Row>
      </S.Container>
    </S.HeroAreaSection>
  );
}
