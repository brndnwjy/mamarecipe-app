import React from "react";

const Button = ({ title, type, classname }) => {
  return (
    <button type={type} className={classname}>
      {title}
    </button>
  );
};

export default Button;
