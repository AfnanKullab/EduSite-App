import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  margin-left: 5em;
  margin-right: 5em;
  padding: 80px 0px;
`;
export const TopFooter = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
export const LeftSide = styled.div`
  width: 50%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const ImgLink = styled.a`
  margin-top: 20px;
  display: inline-block;
  &:hover {
    color: #374050;
    opacity: 0.9;
  }
`;
export const Img = styled.img`
  max-height: 30px;
`;
export const RightSide = styled.div`
  width: 50%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const FooterNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  /* margin: 0px; */
  list-style: none;
`;
export const Item = styled.li`
  margin-left: 15px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.42857143;
`;
export const Link = styled.a`
  display: block;
  text-transform: uppercase;
  transition: 0.2s color;
  font-family: "Lato", sans-serif;
  color: #374050;
  text-decoration: none;
  &:hover {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
  }
`;
// Bottom Footer
export const BottomFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ebebeb;
  margin-right: -15px;
  margin-left: -15px;
`;
export const SocialIcons = styled.div`
  width: 33.3%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const SocialNav = styled.ul`
  list-style: none;

  display: flex;
  justify-content: flex-end;
`;
export const SocialItem = styled.li`
  margin-left: 10px;
`;
export const SocialLink = styled.a`
  /* display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  transition: 0.2s opacity; */
`;
export const Right = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 66.6%;
`;
export const CopyRight = styled.div`
  line-height: 40px;
`;
