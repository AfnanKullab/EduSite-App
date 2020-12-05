import React from "react";
import Heading from "../Heading";
import FeaturesWhyEduSite from "../FeaturesWhyEduSite";
import * as S from "./style";
import * as T from "../Typography";
import * as I from "../Icon";

export default function WhyEduSite() {
  return (
    <S.Wrapper>
      <Heading>
        <T.H2>Explore Courses</T.H2>
        <T.P>
          Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
        </T.P>
      </Heading>
      <FeaturesWhyEduSite />
    </S.Wrapper>
  );
}
