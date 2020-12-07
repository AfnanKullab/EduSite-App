import styled, { keyframes } from "styled-components";
const PlayAnimation = keyframes`
from{
  box-shadow: 0 0 0 0 #fff;
}

to{
  box-shadow: 0px 0px 0px 10px transparent;
}`;
export const FeatureIcon = styled.i`
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  font-size: 30px;
  border: 1px solid #ebebeb;
  color: #ff6700;
`;
export const CourseLinkIcon = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% - 15px));
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 50%;
  opacity: 0;
  z-index: 10;
  transition: 0.2s all;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #ff6700;
    opacity: 0;
    transition: 0.2s opacity;
  }
`;
export const Play = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  font-size: 24.027px;
  z-index: 10;
  animation: 2s ${PlayAnimation} infinite;
  transition: 0.2s color;
  z-index: 1;
  &::after {
    content: "";

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #ff6700;
    opacity: 0.7;
  }
`;
export const Facebook = styled.i`
  /* font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased; */
  background-color: #3b5998;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
`;
export const Twitter = styled.i`
  background-color: #55acee;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
`;
export const GooglePlus = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
  background-color: #dd4b39;
`;
export const Instagram = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
  background-color: #e95950;
`;
export const Youtube = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
  background-color: #ff0000;
`;
export const LinkedIn = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity;
  background-color: #007bb5;
`;
