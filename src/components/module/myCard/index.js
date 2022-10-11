import React from "react";

import Button from "../../base/button";

import styles from "./mycard.module.css";

const MyCard = ({ img, title, style }) => {
  return (
    <div className={`d-flex flex-column align-items-center ${styles.mycard}`} style={style}>
      <div className={`d-flex flex-column align-items-center ${styles['mycard-img']}`}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </div>
      <div className={`w-100 d-flex align-items-center justify-content-evenly`}>
        <Button title="Edit" classname={`col-5 ${styles["edit-btn"]}`} />
        <Button title="Delete" classname={`col-5 ${styles["delete-btn"]}`} />
      </div>
    </div>
  );
};

export default MyCard;
