import styled from "styled-components";

export const MainButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  background-color: #ff6700;
  border: 1px solid transparent;
  border-radius: 40px;
  color: #fff;
  /* -webkit-transition: 0.2s all; */
  transition: 0.2s all;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  z-index: 1;
  &:hover {
    padding-right: 35px;
    /* padding-left: 30px; */
    color: #ff6700;
    background-color: #fff;
    border: 1px solid transparent;
    border-color: #ff6700;
  }
`;
export const SubmitBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  background-color: #ff6700;
  border: 1px solid transparent;
  border-radius: 40px;
  color: #fff;
  /* -webkit-transition: 0.2s all; */
  transition: 0.2s all;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
  &:hover {
    padding-right: 35px;
    /* padding-left: 30px; */
    color: #ff6700;
    background-color: #fff;
    border: 1px solid transparent;
    border-color: #ff6700;
  }
`;
