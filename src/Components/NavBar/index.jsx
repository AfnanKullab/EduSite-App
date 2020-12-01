import React from "react";
import * as S from "./style";
import logoIamage from "../../images/logo.png";

const Items = ["Home", "About", "Courses", "Blog", "Contact"];
export default function NavBar() {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Logowrapper>
          <S.Logo>
            <img src={logoIamage} alt="logo" style={{ maxHeight: 30 }} />
          </S.Logo>
        </S.Logowrapper>

        <S.NavList>
          {Items.map((Item) => (
            <S.NavItem>
              <S.NavLink>{Item}</S.NavLink>
            </S.NavItem>
          ))}
        </S.NavList>
      </S.Container>
    </S.HeaderWrapper>
  );
}
