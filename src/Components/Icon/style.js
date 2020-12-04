import styled from "styled-components";

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
  & :after {
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
