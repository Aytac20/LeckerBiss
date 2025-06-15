import React from "react";
const FormContainer = ({ children }) => {
  return (
    <div className="w-[90%] grid mx-auto h-[70vh] items-center justify-center  ">
      <div className="grid w-[40rem] p-[2rem] ">{children}</div>
    </div>
  );
};

export default FormContainer;
