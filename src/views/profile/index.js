import React, { Fragment, useEffect, useState } from "react";
import Navi from "../../components/module/navi/logged";
import Footer from "../../components/module/footer";
import Card from "../../components/module/card";
import MyCard from "../../components/module/myCard";
import Button from "../../components/base/button";

import styles from "./profile.module.css";

import dummy from "../../assets/avatar.jpeg";
import editicon from "../../assets/editicon.svg";
import headerimage from "../../assets/headerimage.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, getMyRecipe } from "../../redux/action/recipe.action";
import { useNavigate } from "react-router-dom";
import Input from "../../components/base/input";
import { update } from "../../redux/action/user.action";
import { Helmet } from "react-helmet";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localToken = localStorage.getItem("token");
  const { user } = useSelector((state) => state.user);
  const { myrecipe } = useSelector((state) => state.recipe);

  const [editorMode, setEditorMode] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [activetab, setActivetab] = useState("myrecipe");

  const [username, setUsername] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const getRecipe = async () => {
    try {
      dispatch(getMyRecipe(localToken));
    } catch (error) {
      console.log(error);
    }
  };

  const removeRecipe = async (recipe_id) => {
    try {
      dispatch(deleteRecipe(localToken, recipe_id, navigate));
      dispatch(getMyRecipe(localToken));
      navigate("/profile")
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatar = (e) => {
    setFile(e.target.files[0]);
    setPreview([URL.createObjectURL(e.target.files[0])]);
  };

  const handleProfile = (e) => {
    e.preventDefault();

    let formData = new FormData();
    if (username) {
      formData.append("name", username);
    }

    if (file) {
      formData.append("avatar", file);
    }

    dispatch(update(user.user_id, localToken, formData, navigate));

    // axios.put(
    //   `${process.env.REACT_APP_API_BACKEND}/user/${user.user_id}`,
    //   formData,
    //   {
    //     headers: { Authorization: `Bearer ${localToken}` },
    //   }
    // );
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.avatar) {
      setAvatar(user.avatar);
    }
  }, [user]);

  return (
    <Fragment>
      <Helmet>
        <title>Mamarecipe - {user.name}'s Profile</title>
      </Helmet>
      <Navi />
      <main
        className={`d-flex flex-column align-items-center justify-content-center`}
      >
        <section className="mb-5 d-flex flex-column align-items-center justify-content-center">
          <div
            className={`d-flex flex-column align-items-center justify-content-center`}
          >
            {editorMode ? (
              <>
                <label
                  htmlFor="avatar"
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={preview ? preview : avatar}
                    alt="avatar"
                    className={`col-4 ${styles.avatar}`}
                  />
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={handleAvatar}
                  hidden
                />
              </>
            ) : (
              <img
                src={avatar ? avatar : dummy}
                alt="avatar"
                className={`col-4 ${styles.avatar}`}
              />
            )}
            <button
              className={styles["pen-btn"]}
              onClick={() => setEditorMode(!editorMode)}
            >
              <img src={editicon} alt="edit icon" />
            </button>
            {editorMode ? (
              <div className="">
                <Input
                  name="name"
                  type="name"
                  placeholder={user && user.name}
                  onchange={(e) => setUsername(e.target.value)}
                  classname={styles.name}
                />
                <Button
                  title="Save Changes"
                  classname={styles["edit-btn"]}
                  onclick={handleProfile}
                />
              </div>
            ) : (
              <h2 className="m-0">{user ? user.name : ""}</h2>
            )}
          </div>
        </section>

        <section className="container mt-3 d-flex flex-column align-items-start justify-content-center">
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
            {/* <div className={`w-100 ${styles.hl}`} /> */}
          </div>

          <div className="mt-5 col-12">
            {activetab === "myrecipe" ? (
              <div className="d-flex flex-md-row flex-column justify-content-center justify-content-md-start flex-wrap">
                {myrecipe
                  ? myrecipe.map((item) => (
                      <MyCard
                        img={item.photo}
                        title={item.title}
                        onrecipe={() => navigate(`/${item.recipe_id}`)}
                        onedit={() => navigate(`/edit/${item.recipe_id}`)}
                        ondelete={() => removeRecipe(item.recipe_id)}
                      />
                    ))
                  : ""}
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
