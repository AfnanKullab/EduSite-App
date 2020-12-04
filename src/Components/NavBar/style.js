import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid rgba(235, 235, 235, 0.25);
  /* background-color: #fff; */
  background-color: transparent;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
`;
export const Logowrapper = styled.div`
  padding: 0;
  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 0;
  }
  @media (min-width: 768px) {
    float: left;
  }
`;
export const Logo = styled.a`
  margin-top: 0.83em; //10px
  display: inline-block;
`;
export const NavbarToggle = styled.button`
  position: fixed;
  right: 0;
  padding: 0;
  height: 7.04vh; //40px
  width: 40px;
  margin-top: 0.41em; //5px
  z-index: 99;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  color: #fff;
  @media (min-width: 768px) {
    float: right !important;
    margin-right: -15px;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const NavItem = styled.li`
  position: relative;
  box-sizing: border-box;
  @media (min-width: 768px) {
    float: left;
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.2s all;
  line-height:  3.52vh; //20px
  display: block;
  padding:0.83em 1.25em ; //10px 15px
  & :after {
    content: "";
    display: block;
    height:  0.35vh; //2px
    background-color: #FF6700;
    width: 100%;
    transform: translateY(5px);
    opacity: 0;
    transition: 0.2s all;
  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
