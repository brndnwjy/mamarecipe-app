import React, { Fragment, useState, useEffect } from "react";
import Navi from "../../components/module/navi";
import Footer from "../../components/module/footer";
import Card from "../../components/module/card";

import searchicon from "../../assets/searchicon.svg";
import headerimage from "../../assets/headerimage.png";

import styles from "./home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/action/recipe.action";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipe } = useSelector((state) => state.recipe.recipe);

  const getRecipe = async () => {
    try {
      dispatch(getAll());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [search, setSearch] = useState()

  const handleSearch = (e) => {
    if(e.key === "Enter"){
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <Fragment>
      <Navi />
      <main>
        <section className={`d-flex container ${styles.header}`}>
          <div className={`col-12 col-md-9 ${styles.subheader}`}>
            <h1 className="col-8">Discover Recipe & Delicious Food</h1>
            <div
              className={`d-flex align-items-center col-8 ${styles.searchbar}`}
            >
              <img src={searchicon} alt="" />
              <input name="search" type="text" placeholder="Search Recipe" onChange={(e) => setSearch(e.target.value)}  onKeyDown={handleSearch}/>
            </div>
          </div>

          <div className={`${styles["header-image"]}`}>
            <img src={headerimage} alt="" />
          </div>
          <div className={`col-3 ${styles.yellow}`}></div>
        </section>

        <section className="container mt-3 d-flex flex-column align-items-center align-items-md-start">
          <div className={`d-flex align-items-center mb-3 ${styles.title}`}>
            <div className={styles["side-block"]} />
            <h2>Recipe For You!</h2>
          </div>
          <div className="d-flex flex-md-row flex-column align-content-center flex-wrap">
            <Card img={headerimage} title="Loream Sandwich" />
            <Card img={headerimage} title="Loream Sandwich" />
          </div>
        </section>

        <section className="container mt-5">
          <div
            className={`d-flex align-items-center justify-content-center justify-content-md-start mb-3 ${styles.title}`}
          >
            <div className={styles["side-block"]} />
            <h2>New Recipe</h2>
          </div>
          <div
            className={`d-flex flex-column flex-md-row align-items-center ${styles["new-recipe"]}`}
          >
            <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start">
              <img src={headerimage} alt="" />
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
              <span>Loream Sandwich</span>
              <p>Coolest sandwich you will ever have</p>
              <button>
                <Link to="/detail">Learn More</Link>
              </button>
            </div>
            <div className={styles["bg-block"]} />
          </div>
        </section>

        <section className="container mt-5 d-flex flex-column align-items-center align-items-md-start">
          <div className={`d-flex align-items-center mb-3 ${styles.title}`}>
            <div className={styles["side-block"]} />
            <h2>Popular Recipe</h2>
          </div>
          <div className="d-flex flex-md-row flex-column justify-content-between flex-wrap">
            {recipe ? recipe.map((item) => (
              <Card img={item.photo} title={item.title} onclick={() => navigate(`/${item.recipe_id}`)} style={{marginLeft: "0"}}/>
            )) : ""}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
