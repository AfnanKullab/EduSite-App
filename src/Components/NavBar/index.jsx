import React from "react";
import * as S from "./style";
import whitelogo from "../../images/logo.png";
import blacklogo from "../../images/logo (1).png";

export default function NavBar({ bgcolor, color, white }) {
  const Items = [
    {
      path: "/",
      nav: "Home",
    },
    {
      path: "/about",
      nav: "About",
    },
    {
      path: "/courses",
      nav: "Courses",
    },
    {
      path: "/blog",
      nav: "Blog",
    },
    {
      path: "/contact",
      nav: "Contact",
    },
  ];
  return (
    <S.NavBarWrapper className="header" bgcolor={bgcolor}>
      <S.Container>
        <S.Brand>
          <S.LogoLink to="/">
            <S.LogoImg src={white ? whitelogo : blacklogo} alt="logo" />
          </S.LogoLink>
        </S.Brand>

        <S.NavList>
          {Items.map((Item, index) => (
            <S.NavItem key={index}>
              <S.NavLink color={color} to={Item.path}>
                {Item.nav}
              </S.NavLink>
            </S.NavItem>
          ))}
        </S.NavList>
      </S.Container>
    </S.NavBarWrapper>
  );
}
