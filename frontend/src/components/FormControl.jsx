import React from "react";
import { Form } from "react-bootstrap";

const FormControl = ({ type, value, onChange, placeholder }) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
      p-3 mb-2 !text-[1.3rem] !text-inherit placeholder:!text-[#5023147a] "
    ></Form.Control>
  );
};

export default FormControl;
