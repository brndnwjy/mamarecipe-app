import React from "react";

const Input = ({ label, id, name, type, placeholder, classname }) => {
  return (
    <div className={classname}>
      {label ? <label style={{display: "block"}} htmlFor={id}>{label}</label> : <></>}
      <input id={id} name={name} type={type} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
