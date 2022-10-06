import React, { Fragment } from "react";

const FileInput = ({ id, name, src, alt, caption, classname }) => {
  return (
    <Fragment>
      <label htmlFor={id} className={classname}>
        <div>
            <img src={src} alt={alt} />
            <p>{caption}</p>
        </div>
      </label>
      <input id={id} name={name} type="file" hidden/>
    </Fragment>
  );
};

export default FileInput;
