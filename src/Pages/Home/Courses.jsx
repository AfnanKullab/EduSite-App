import React from "react";
import CourseCard from "../../Components/CourseCard";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
// import Container from "../../Components/Container";
import * as T from "../../Components/Typography";

import styled from "styled-components";
const Wrapper = styled.div`
  margin-left: 5em;
  margin-right: 5em;
  padding: 80px 0px 0px;
`;
// const RowHead = styled.div`
//   margin-right: -15px;
//   margin-left: -15px;
// `;

const CoursesWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
`;
/// style Button
export const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 2.5em;
`;

export default function Courses() {
  return (
    <Wrapper>
      <Heading>
        <T.H2>Explore Courses</T.H2>
        <T.P>
          Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
        </T.P>
      </Heading>
      <CoursesWrapper>
        <CourseCard />
        <ButtonDiv>
          <Button>More Courses</Button>
        </ButtonDiv>
      </CoursesWrapper>
    </Wrapper>
  );
}
