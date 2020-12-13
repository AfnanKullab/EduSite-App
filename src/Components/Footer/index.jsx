import React from "react";
import LogoIamage from "../../images/logo (1).png";
import {
  Facebook,
  Twitter,
  GooglePlus,
  Instagram,
  Youtube,
  LinkedinIn,
} from "../Icon";
import * as S from "./style";
// import * as I from "../Icon";

export default function Footer() {
  const Items = ["Home", "About", "Courses", "Blog", "Contact"];
  const SocialIcons = [
    <Facebook />,
    <Twitter />,
    <GooglePlus />,
    <Instagram />,
    <Youtube />,
    <LinkedinIn />,
  ];

  return (
    <S.Wrapper>
      <S.TopFooter>
        <S.LeftSide>
          <S.ImgLink>
            <S.Img src={LogoIamage} alt="logo" />
          </S.ImgLink>
        </S.LeftSide>

        <S.RightSide>
          <S.FooterNav>
            {Items.map((Item, index) => (
              <S.Item key={index}>
                <S.FooterNavLink>{Item}</S.FooterNavLink>
              </S.Item>
            ))}
          </S.FooterNav>
        </S.RightSide>
      </S.TopFooter>

      <S.BottomFooter>
        <S.Right>
          <S.CopyRight>
            <span>
              © Copyright 2018. All Rights Reserved. | This template is made
              with{" "}
            </span>
          </S.CopyRight>
        </S.Right>
        <S.SocialIcons>
          <S.SocialNav>
            {SocialIcons.map((Item, index) => (
              <S.SocialItem key={index}>
                <S.SocialLink>{Item}</S.SocialLink>
              </S.SocialItem>
            ))}
          </S.SocialNav>
        </S.SocialIcons>
      </S.BottomFooter>
    </S.Wrapper>
  );
}
