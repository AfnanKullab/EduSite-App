import styled from "styled-components";
export const CardWrapper = styled.div`
  margin-top: 2em; //20px
  margin-bottom: 2em; //20px
  padding-right: 1.25em;
  padding-left: 1.25em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
/// Full Card
export const Card = styled.div`
  display: flex;
  width: 25%;
  margin: 0.6em 0em;
  padding: 0 1.25em;
`;
export const Course = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;
export const CourseLink = styled.a`
  position: relative;
  display: block;
  margin-bottom: 1.6em;
  border-radius: 4px;
  overflow: hidden;
  width: 262.5px;
  height: 175px;
`;
export const CourseImg = styled.img`
  width: 100%;
`;
export const CourseTitle = styled.a`
  display: block;
  height: 7.39vh; //42px
  font-family: "Lato", sans-serif;
  color: #374050;
  font-weight: 700;
  text-decoration: none;
`;
/// Course Details
export const CourseDetails = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
`;
export const CourseCategory = styled.span``;
export const CourseFree = styled.span`
  color: green;
`;
export const CoursePremium = styled.span`
  color: #ff6700;
`;
