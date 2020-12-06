import React from "react";
import Heading from "../Heading";
import FeaturesWhyEduSite from "../FeaturesWhyEduSite";
import * as S from "./style";
import * as T from "../Typography";
import * as I from "../Icon";
import Video from "../../images/video.jpg";

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
      <S.HR />
      <S.SecondWrapper>
        <S.LiftSide>
          <T.H3>
            Persius imperdiet incorrupte et qui, munere nusquam et nec.
          </T.H3>
          <T.P>
            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
          </T.P>
          <T.Para>
            No vel facete sententiae, quodsi dolores no quo, pri ex tamquam
            interesset necessitatibus. Te denique cotidieque delicatissimi sed.
            Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At
            sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi
            mediocrem.
          </T.Para>
        </S.LiftSide>
        <S.RightSide>
          <S.Video>
            <S.VideoImg src={Video} />
            <I.Play />
          </S.Video>
        </S.RightSide>
      </S.SecondWrapper>
    </S.Wrapper>
  );
}
