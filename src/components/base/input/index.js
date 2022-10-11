import React from "react";

const Input = ({ label, id, name, type, placeholder, onchange, classname }) => {
  return (
    <div className={classname}>
      {label ? <label style={{display: "block"}} htmlFor={id}>{label}</label> : <></>}
      <input id={id} name={name} type={type} placeholder={placeholder} onChange={onchange}/>
    </div>
  );
};

export default Input;
