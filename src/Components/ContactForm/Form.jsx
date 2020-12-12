import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import styled from "styled-components";
const ButtonDev = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {};
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        // value={name}
        // error={errors}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        // value={email}
        onChange={handleChange}
        // error={errors.email}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        // value={password}
        onChange={handleChange}
        // error={errors.password}
      />
      <TextArea name="message" placeholder="Enter your Message"></TextArea>
      <ButtonDev>
        <Button type="submit">Send Message</Button>
      </ButtonDev>
    </form>
  );
}
