import React from "react";
import { Form } from "react-bootstrap";

const FormControl = ({ type, value, onChange, placeholder }) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="!bg-transparent !border-[#50231455] !py-[0.8rem] placeholder:!text-[#50231480] placeholder:!text-[1.4rem] !rounded-lg !text-[1.4rem] !text-[#502314d8] mb-[1.2rem]"
    ></Form.Control>
  );
};

export default FormControl;
