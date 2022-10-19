import React, { Fragment, useEffect, useState } from "react";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import Button from "../../../components/base/button";

import styles from "./detail.module.css";

import playicon from "../../../assets/playicon.svg";
import Ayudia from "../../../assets/ayudia.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState();
  const [owner, setOwner] = useState();
  const [title, setTitle] = useState();
  const [photo, setPhoto] = useState();
  const [ingredient, setIngredient] = useState();

  const getDetail = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/recipe/${id}`
    );
    setDetail(result.data.data[0]);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (detail) {
      setTitle(detail.title);
      setOwner(detail.recipe_owner);
      setPhoto(detail.photo);
      setIngredient(detail.ingredient.split(","));
    }
  }, [detail]);

  return (
    <Fragment>
      <Navi />
      <main className={`container d-flex flex-column`}>
        <section
          className={`mb-4 d-flex flex-column align-items-center ${styles.recipe}`}
        >
          <h1>{title}</h1>
          <img src={photo} alt="Loream sandwich" className={`mb-3 col-8`} />
          <h4 className="mb-3">Recipe owner : {owner}</h4>
        </section>

        <section
          className={`mb-4 d-flex flex-column align-items-start ${styles.ingredient}`}
        >
          <h2>Ingredients</h2>
          <ul>{ingredient ? ingredient.map((item) => <li>{item}</li>) : ""}</ul>
        </section>

        <section
          className={`d-flex flex-column align-items-start ${styles.video}`}
        >
          <h2>Video Step</h2>
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`mb-4 ${styles["video-btn"]}`}
          />
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`mb-4 ${styles["video-btn"]}`}
          />
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`mb-4 ${styles["video-btn"]}`}
          />
        </section>

        <section className={styles.commentary}>
          <form
            className={`d-flex flex-column align-items-center ${styles["comment-field"]}`}
          >
            <textarea
              name="comment"
              placeholder="Comment :"
              className={`mb-4 ${styles.textarea}`}
            />
            <Button title="Send" classname={`my-2 ${styles["comment-btn"]}`} />
          </form>

          <h2>Comments</h2>
          <div className={`d-flex align-items-center`}>
            <img src={Ayudia} alt="ayudia" />
            <div className={`mx-3 d-flex flex-column justify-content-center`}>
              <h4 className={`m-0`}>Ayudia</h4>
              <p className={`m-0`}>Nice Recipe. Simple and Delicious, thanks</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Detail;
