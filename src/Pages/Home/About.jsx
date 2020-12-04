import React from "react";
import Feature from "../../Components/Feature";
import AboutImage from "../../images/about (1).png";

import * as T from "../../Components/Typography";
import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  margin-left: 5em;
  margin-right: 5em;
  padding-top: 3em;
`;
// const AboutRow = styled.div`
//   margin-right: -1.25em; //-15px
//   margin-left: -1.25em; //-15px
//   display: flex;
// `;
const LeftSide = styled.div`
  width: 50%;
  position: relative;
  min-height: 0.176vh; //1px
  padding-right: 1.25em; //15px
  padding-left: 1.25em; //15px
`;
const SectionHeader = styled.div`
  margin-bottom: 3.3em //40px
;
`;
const RightSide = styled.div`
  width: 50%;
  padding-right: 1.25em; //15px
  padding-left: 1.25em; //15px
`;
const ImgDev = styled.div`
  /* margin-top: 3.33em; //40px */
`;
const Image = styled.img`
  width: 100%;
`;

export default function About() {
  return (
    <AboutWrapper>
      <LeftSide>
        <SectionHeader>
          <T.H2>Welcome to Edusite</T.H2>
          <T.P>
            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
          </T.P>
        </SectionHeader>
        <Feature />
      </LeftSide>

      <RightSide>
        <ImgDev>
          <Image src={AboutImage} alt="Image" />
        </ImgDev>
      </RightSide>
    </AboutWrapper>
  );
}
