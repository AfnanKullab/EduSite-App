import styled from "styled-components";
import background from "../../images/background.jpg";
export const Wrapper = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 80px;
`;
export const BackgroundImg = styled.div`
  background-image: url(${background});
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
export const Contianer = styled.div`
  /* margin-left: 5em;
  margin-right: 5em; */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
`;

export const Details = styled.div`
  width: 50%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  color: #fff;
`;
