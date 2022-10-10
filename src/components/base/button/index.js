import React from "react";

const Button = ({ title, type, classname, onclick }) => {
  return (
    <button type={type} className={classname} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
