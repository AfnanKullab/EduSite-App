import styled from "styled-components";
import { Link } from "react-router-dom";
import logoIamage from "../../images/logo.png";
import logoIamage2 from "../../images/logo (1).png";

export const NavBarWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid rgba(235, 235, 235, 0.25);
  ${(props) =>
    props.bgcolor
      ? "background-color:transparent ;"
      : "background-color:#fff;"};
  transition: 0.2s all;
`;
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px 89.5px;
  display: flex;
  justify-content: space-between;
`;
// logo
// export const NavbarHeader = styled.div`
//   margin-right: 0;
//   margin-left: 0;
// `;
export const Brand = styled.div`
  padding: 0px;
  margin-right: 0;
  margin-left: 0;
`;
export const LogoLink = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  /* z-index: 1; */
`;
export const LogoImg = styled.img`
  max-height: 30px;
  /* ${(props) => (props.image ? `${logoIamage}` : `${logoIamage2}`)}; */
`;

//NavBar list
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: -15px;
  font-size: 15px;
  font-weight: 400;
`;
export const NavItem = styled.li`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 15px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  transition: 0.2s all;
  line-height: 3.52vh; //20px
  /* padding: 15px; */
  font-weight: bold;
  ${(props) => (props.color === "home" ? "color: #fff;" : "color:#374050;")};
  &::after {
    content: "";
    /* display: block; */
    height: 0.35vh; //2px
    background-color: #ff6700;
    width: 100%;
    transform: translateY(5px);
    opacity: 0;
    transition: 0.2s all;
  }
  &:hover {
    /* padding-left: 0px;
    padding-right: 0px; */
    padding-bottom: 0px;
    border-bottom: 2px solid #ff6700;
  }
`;
