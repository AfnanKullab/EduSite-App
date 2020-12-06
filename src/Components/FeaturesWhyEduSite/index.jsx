import React from "react";
import * as I from "../Icon/index";
import * as T from "../Typography/index";
import * as S from "./style";
export default function FeaturesWhyEduSite() {
  return (
    <S.FeaturesWrapper>
      <S.Feature>
        <I.Flask />
        <S.FeatureContent>
          <T.H4>Online Courses</T.H4>
          <T.Para>
            Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his
            suas veniam nominati.
          </T.Para>
        </S.FeatureContent>
      </S.Feature>

      <S.Feature>
        <I.Users />
        <S.FeatureContent>
          <T.H4>Expert Teachers</T.H4>
          <T.Para>
            Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his
            suas veniam nominati.
          </T.Para>
        </S.FeatureContent>
      </S.Feature>

      <S.Feature>
        <I.Comments />
        <S.FeatureContent>
          <T.H4>Community</T.H4>
          <T.Para>
            Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his
            suas veniam nominati.
          </T.Para>
        </S.FeatureContent>
      </S.Feature>
    </S.FeaturesWrapper>
  );
}
