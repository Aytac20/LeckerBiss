import React from "react";
import { Alert } from "react-bootstrap";
const Message = ({ variant, children }) => {
  return (
    <Alert
      variant={variant}
      style={{
        fontSize: "1.5rem",
        marginTop: "1rem",
      }}
    >
      {children}
    </Alert>
  );
};
Message.defaultProps = {
  variant: "info",
};
export default Message;
