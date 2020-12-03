import styled from "styled-components";

export const Container = styled.div`
  padding-right: 1.25em; //15px
  padding-left: 1.25em; //15px
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;
