import React from "react";
import styled from "styled-components";

const ListItems = styled.ul`
  margin: --15px;
  padding: 0;
`;
const Items = styled.li`
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  &:first-child {
    &::after {
      content: "/";
      display: inline-block;
      margin: 0px 5px;
      color: rgba(235, 235, 235, 0.25);
    }
  }
`;
const Link = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
`;
export default function List(props) {
  const { subTitle } = props;
  return (
    <ListItems>
      <Items>
        <Link>Home</Link>
      </Items>
      <Items>{subTitle}</Items>
    </ListItems>
  );
}
