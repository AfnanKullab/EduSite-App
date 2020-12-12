import React from "react";
import NavBar from "../NavBar";
import Button from "../../Components/Button";
import * as S from "./style";
import * as T from "../../Components/Typography";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <NavBar bgcolor color="home" white />
      <S.Header>
        <S.BGHeaderImg />
        <S.HeaderContent>
          <S.Container>
            <S.Row>
              <S.Content>
                <T.H1>Edusite Free Online Training Courses</T.H1>
                <T.PP>
                  Libris vivendo eloquentiam ex ius, nec id splendide
                  abhorreant, eu pro alii error homero.
                </T.PP>
                <Button>Get Started!</Button>
              </S.Content>
            </S.Row>
          </S.Container>
        </S.HeaderContent>
      </S.Header>
    </S.HeaderWrapper>
  );
}
