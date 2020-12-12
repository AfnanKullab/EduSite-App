import styled from "styled-components";
import HeroAreaBG from "../../images/HeroAreaBG.jpg";
export const HeaderWrapper = styled.div``;
export const Header = styled.div`
  height: calc(100vh - 80px);
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
`;
export const BGHeaderImg = styled.div`
  background-image: url(${HeroAreaBG});
  background-attachment: fixed;
  position: absolute;
  height: 80vh;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    height: 80vh;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, #374050 0%, #798696 100%);
    opacity: 0.7;
  }
`;

export const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
`;
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px 89.5px;
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;
export const Content = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 66.6%;
`;
