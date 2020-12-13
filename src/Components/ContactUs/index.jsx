import React from "react";
import * as B from "../../Components/Button";
import * as S from "./style";
import * as T from "../Typography";

export default function ContactUs() {
  return (
    <S.Wrapper>
      <S.BackgroundImg />
      <S.Container>
        <S.Row>
          <T.HH2>Contact Us</T.HH2>
          <T.PP>
            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
          </T.PP>
          <B.Button>Contact Us Now</B.Button>
        </S.Row>
      </S.Container>
    </S.Wrapper>
  );
}
