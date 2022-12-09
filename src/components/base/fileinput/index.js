import React, { Fragment } from "react";

const FileInput = ({ id, name, src, alt, caption, onchange, classname}) => {
  return (
    <Fragment>
      <label htmlFor={id} className={classname}>
        <div>
            <img style={{maxWidth: "400px", maxHeight: "400px", objectFit: "cover"}} src={src} alt={alt} />
            <p>{src ? "" : caption}</p>
        </div>
      </label>
      <input id={id} name={name} type="file" onChange={onchange} hidden/>
    </Fragment>
  );
};

export default FileInput;
