import React, { Fragment } from "react";
// import { Helmet } from "react-helmet";
import styles from "./insert.module.css";

import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import Input from "../../../components/base/input";
import FileInput from "../../../components/base/fileinput";
import Button from "../../../components/base/button";

import imageicon from "../../../assets/imageicon.svg";

const Insert = () => {
  return (
    <Fragment>
      <Navi />
      <form
        className={`w-100 d-flex flex-column align-items-center container ${styles.wrapper}`}
      >
        <FileInput
          id="image"
          name="image"
          src={imageicon}
          alt="file icon"
          caption="Add Photo"
          classname={`w-100 d-flex flex-column align-items-center justify-content-center ${styles["file-input"]}`}
        />
        <Input
          name="title"
          type="text"
          placeholder="Title"
          classname={`w-100 my-4 ${styles.input}`}
        />
        <textarea
          name="ingredient"
          placeholder="Ingredient"
          className={`mb-4 ${styles.textarea}`}
        />
        <FileInput
          id="video"
          name="video"
          src={imageicon}
          alt="file icon"
          caption="Add Video"
          classname={`w-100 d-flex flex-column align-items-center justify-content-center ${styles["file-input"]}`}
        />
        <Button
          title="Post"
          type="submit"
          classname={`w-50 my-5 ${styles.button}`}
        />
      </form>
      <Footer />
    </Fragment>
  );
};

export default Insert;
