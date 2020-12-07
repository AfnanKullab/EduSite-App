import React from "react";
import Button from "../Button";
import * as S from "./style";
import * as T from "../../Components/Typography";

export default function CallToAction() {
  return (
    <S.Wrapper>
      <S.BackgroundImg />
      <S.Contianer>
        <S.Row>
          <S.Details>
            <T.HH2>
              Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.
            </T.HH2>
            <T.PP>
              Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his
              suas veniam nominati.
            </T.PP>
            <Button>Get Started!</Button>
          </S.Details>
        </S.Row>
      </S.Contianer>
    </S.Wrapper>
  );
}
