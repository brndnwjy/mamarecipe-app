import React, { Fragment } from "react";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import Button from "../../../components/base/button";

import styles from "./detail.module.css";

import Loream from "../../../assets/loream.jpg";
import playicon from "../../../assets/playicon.svg";
import Ayudia from "../../../assets/ayudia.png";

const Detail = () => {
  return (
    <Fragment>
      <Navi />
      <main className={`container d-flex flex-column`}>
        <section
          className={`mb-4 d-flex flex-column align-items-center ${styles.recipe}`}
        >
          <h1>Loream Sandwich</h1>
          <img src={Loream} alt="Loream sandwich" className={`mb-4 col-8`} />
        </section>

        <section
          className={`mb-4 d-flex flex-column align-items-start ${styles.ingredient}`}
        >
          <h2>Ingredients</h2>
          <ul>
            <li>2 Eggs</li>
            <li>2 Tbsp Mayonnaise</li>
            <li>3 Slices of Bread</li>
            <li>A little Butter</li>
            <li> A slice of Ham or Cheese</li>
          </ul>
        </section>

        <section
          className={`d-flex flex-column align-items-start ${styles.video}`}
        >
          <h2>Video Step</h2>
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`btn mb-4 ${styles["video-btn"]}`}
          />
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`btn mb-4 ${styles["video-btn"]}`}
          />
          <Button
            title={<img src={playicon} alt="play icon" />}
            classname={`btn mb-4 ${styles["video-btn"]}`}
          />
        </section>

        <section className={styles.commentary}>
          <form className={`d-flex flex-column align-items-center ${styles['comment-field']}`}>
            <textarea
              name="comment"
              placeholder="Comment :"
              className={`mb-4 ${styles.textarea}`}
            />
            <Button title="Send" classname={`btn my-2 ${styles['comment-btn']}`} />
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
