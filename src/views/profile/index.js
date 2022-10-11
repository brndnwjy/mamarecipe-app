import React, { Fragment, useState } from "react";
import Navi from "../../components/module/navi";
import Footer from "../../components/module/footer";
import Card from "../../components/module/card";
import MyCard from "../../components/module/myCard";
import Button from "../../components/base/button";

import styles from "./profile.module.css";

import avatar from "../../assets/avatar.jpeg";
import editicon from "../../assets/editicon.svg";
import headerimage from "../../assets/headerimage.png";

const Profile = () => {
  const [activetab, setActivetab] = useState("myrecipe");

  console.log(activetab);

  return (
    <Fragment>
      <Navi />
      <main
        className={`d-flex flex-column align-items-center justify-content-center`}
      >
        <section className="mb-5 d-flex flex-column align-items-center justify-content-center">
          <div
            className={`d-flex flex-column align-items-center justify-content-center ${styles.account}`}
          >
            <img src={avatar} alt="avatar" className="col-4" />
            <button>
              <img src={editicon} alt="edit icon" />
            </button>
          </div>
          <h2>Brandon Wijaya</h2>
        </section>

        <section className="container mt-5 d-flex flex-column align-items-start justify-content-center">
          <div
            className={`w-100 d-flex justify-content-between justify-content-md-start ${styles["tab-option"]}`}
          >
            <Button
              title="My Recipe"
              classname={styles["tab-btn"]}
              onclick={() => setActivetab("myrecipe")}
            />
            <Button
              title="Saved Recipe"
              classname={styles["tab-btn"]}
              onclick={() => setActivetab("savedrecipe")}
            />
            <Button
              title="Liked Recipe"
              classname={styles["tab-btn"]}
              onclick={() => setActivetab("likedrecipe")}
            />
          <div className={`w-100 ${styles.hl}`} />
          </div>


          <div className="mt-5 col-12">
            {activetab === "myrecipe" ? (
              <div className="d-flex flex-md-row flex-column justify-content-center justify-content-md-start flex-wrap">
                <MyCard img={headerimage} title="Loream Sandwich" />
                <MyCard img={headerimage} title="Loream Sandwich" />
              </div>
            ) : activetab === "savedrecipe" ? (
              <div className="d-flex flex-md-row flex-column align-content-center justify-content-center justify-content-md-start flex-wrap">
                <Card img={headerimage} title="Loream Sandwich" />
                <Card img={headerimage} title="Loream Sandwich" />
              </div>
            ) : activetab === "likedrecipe" ? (
              <div className="d-flex flex-md-row flex-column align-content-center justify-content-center justify-content-md-start flex-wrap">
                <Card img={headerimage} title="Loream Sandwich" />
                <Card img={headerimage} title="Loream Sandwich" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Profile;
