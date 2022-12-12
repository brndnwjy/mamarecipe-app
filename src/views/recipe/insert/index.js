import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Helmet } from "react-helmet";
import styles from "./insert.module.css";

import Navi from "../../../components/module/navi/logged";
import Footer from "../../../components/module/footer";
import Input from "../../../components/base/input";
import FileInput from "../../../components/base/fileinput";
import Button from "../../../components/base/button";

import imageicon from "../../../assets/imageicon.svg";
import { addRecipe } from "../../../redux/action/recipe.action";
import { useDispatch } from "react-redux";

const Insert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localToken = localStorage.getItem("token");

  const [recipeForm, setRecipeForm] = useState({
    title: "",
    ingredient: "",
  });

  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useState();

  const handleInput = (e) => {
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setPhoto(e.target.files[0]);
    setPreview([URL.createObjectURL(e.target.files[0])]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", recipeForm.title);
    formData.append("ingredient", recipeForm.ingredient);
    formData.append("photo", photo);

    dispatch(addRecipe(formData, localToken, navigate));
  };
  return (
    <Fragment>
      <Navi />
      <form
        onSubmit={handleUpload}
        className={`w-100 d-flex flex-column align-items-center container ${styles.wrapper}`}
      >
        <FileInput
          id="image"
          name="image"
          src={preview ? preview : imageicon}
          alt="file icon"
          caption="Add Photo"
          onchange={handleFile}
          classname={`w-100 d-flex flex-column align-items-center justify-content-center ${styles["file-input"]}`}
        />
        <Input
          name="title"
          type="text"
          placeholder="Title"
          onchange={handleInput}
          classname={`w-100 my-4 ${styles.input}`}
        />
        <textarea
          name="ingredient"
          placeholder="Ingredient"
          onChange={handleInput}
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
