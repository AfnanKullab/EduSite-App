import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: 5em;
  margin-right: 5em;
`;
export const HR = styled.hr`
  margin-top: 80px;
  margin-bottom: 80px;
  border-color: #ebebeb;
  border: 0;
  border-top: 1px solid #eee;
`;
export const SecondWrapper = styled.div`
  display: flex;
`;
export const LiftSide = styled.div`
  width: 50%;
  padding: 0 1.25em;
`;
export const RightSide = styled.div`
  width: 50%;
  margin: 0px 0px 0px 97.5px;
  padding: 0px 15px;
`;
export const Video = styled.a`
  position: relative;
  display: block;
  border-radius: 4px;
  overflow: hidden;
  width: 457.5px;
  height: 305;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #ff6700;
    opacity: 0.7;
  }
`;
export const VideoImg = styled.img`
  vertical-align: middle;
  width: 100%;
`;
