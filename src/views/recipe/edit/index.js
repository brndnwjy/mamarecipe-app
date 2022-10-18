import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
import styles from "./edit.module.css";

import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import Input from "../../../components/base/input";
import FileInput from "../../../components/base/fileinput";
import Button from "../../../components/base/button";

import imageicon from "../../../assets/imageicon.svg";
import { updateRecipe } from "../../../redux/action/recipe.action";
import { useDispatch } from "react-redux";
import axios from "axios";

const Insert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const localToken = localStorage.getItem("token");

  const [detail, setDetail] = useState();

  const [updateForm, setUpdateForm] = useState();

  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useState();

  const getDetail = async () => {
    const result = await axios.get(`http://localhost:4000/v1/recipe/${id}`);
    setDetail(result.data.data[0]);
    if (result.data.data[0].photo) {
      setPreview(result.data.data[0].photo);
    }
  };

  useEffect(() => {
    getDetail();
    // console.log(detail)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e) => {
    setUpdateForm({
      ...updateForm,
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
    if (updateForm.title) {
      formData.append("title", updateForm.title);
    }

    if (updateForm.ingredient) {
      formData.append("ingredient", updateForm.ingredient);
    }

    if (photo) {
      formData.append("photo", photo);
    }

    dispatch(updateRecipe(formData, localToken, id, navigate));
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
          placeholder={detail ? detail.title : "Title"}
          onchange={handleInput}
          classname={`w-100 my-4 ${styles.input}`}
        />
        <textarea
          name="ingredient"
          placeholder={detail ? detail.ingredient : "Ingredient"}
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
