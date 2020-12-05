import React from "react";
import styled from "styled-components";

const Head = styled.div`
  margin-bottom: 3.3.em; //40px or /16=>2.5
  text-align: center;
`;
export default function Heading(props) {
  const { children } = props;
  return <Head>{children}</Head>;
}
