import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import * as B from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import styled from "styled-components";
const ButtonDev = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const initialState = {
  email: "",
  password: "",
  error: "",
};
const schema = yup.object().shape({
  email: yup.string().email().required("*"),
  password: yup.string().required("*"),
});
export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const [state, setState] = useState(initialState);
  // const [errors, setErrors] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const { email, password, error } = state;
  const history = useHistory();

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(
          {
            email,
            password,
          },
          { abortEarly: false }
        )
        .then(() => {
          if (mount) {
            setError({
              email: "",
              password: "",
            });
          }
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach(({ path, message }) => {
            newErrors[path] = message;
          });

          if (mount) {
            setError({ ...initialState, ...newErrors });
          }
        });
    }
    return () => {
      mount = false;
    };
  }, [isSubmitted, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaaa");
    setIsSubmitted(true);
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          // setState({ error: error });
        });
    }
  };

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

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
        value={email}
        handleChange={handleEmail}
        error={error.email}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        handleChange={handlePassword}
        error={error.password}
      />
      <TextArea name="message" placeholder="Enter your Message"></TextArea>
      <ButtonDev>
        <B.SubmitBtn type="submit">Send Message</B.SubmitBtn>
        {/* <Button type="submit">Send Message</Button> */}
      </ButtonDev>
    </form>
  );
}
