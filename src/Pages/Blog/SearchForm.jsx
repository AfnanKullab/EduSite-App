import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Form = styled.form`
  position: relative;
  margin-top: 0em;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 400;
`;
const SearchInput = styled.input`
  padding-right: 60px;
  height: 40px;
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  background: transparent;
  padding-left: 15px;
  transition: 0.2s border-color;
  &:focus ~ button {
    color: #ff6700;
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  overflow: visible;
  color: #798696;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function SearchForm() {
  return (
    <Form>
      <SearchInput type="text" name="search" />
      <SearchButton>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </Form>
  );
}
