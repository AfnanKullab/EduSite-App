import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";

export default function Form() {
  // handleSubmit(e) {
  //     e.preventDefault();
  //   }
  //   handleChange(){

  //   }
  return (
    <Form>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        // value={value}
        // onChange={handleChange}
        // error={errors}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        // value={value}
        // onChange={handleChange}
        // error={errors}
      />
      <Input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        // value={value}
        // onChange={handleChange}
        // error={errors}
      />
      <TextArea name="message" placeholder="Enter your Message"></TextArea>
      <Button type="submit">Send Message</Button>
    </Form>
  );
}
