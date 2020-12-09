import styled from "styled-components";
import heroAreaBG from "../../images/HeroAreaBG.jpg";
export const HeroAreaSection = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
`;
export const HeroAreaBG = styled.div`
  background-image: url(${heroAreaBG});
  background-attachment: fixed;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, #374050 0%, #798696 100%);
    opacity: 0.7;
  }
`;
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
