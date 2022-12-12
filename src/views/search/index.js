import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navi from "../../components/module/navi";
import Footer from "../../components/module/footer";
import Card from "../../components/module/card";

import styles from "./search.module.css";

import searchicon from "../../assets/searchicon.svg";
import { searchRecipe } from "../../redux/action/recipe.action";
import NaviLogged from "../../components/module/navi/logged";
import { Helmet } from "react-helmet";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const { recipe, pagination } = useSelector((state) => state.recipe.recipe);

  const queryParams = new URLSearchParams(window.location.search);
  const q = queryParams.get("q");

  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("title");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      await navigate(`/search?q=${search}`);
      setCurrentPage(1);
      filterRecipe(search, currentPage, sort);
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    filterRecipe(search, page, sort);
  };

  const handleSort = (e) => {
    const sorting = e.target.value;
    setSort(sorting);
    filterRecipe(search, currentPage, sorting);
  };

  const filterRecipe = (key, page, order) => {
    try {
      dispatch(searchRecipe(key, page, order));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title> Mamarecipe - Search result : {q}</title>
      </Helmet>
      {token ? <NaviLogged /> : <Navi />}

      <main>
        <section className="container d-flex flex-column align-items-center">
          <div
            className={`d-flex align-items-center col-10 col-md-8 ${styles.searchbar}`}
          >
            <img src={searchicon} alt="" />
            <input
              name="search"
              type="text"
              placeholder="Search Recipe"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </section>

        <section className="container mt-5 d-flex flex-column align-items-center align-items-md-start">
          <div className="d-flex justify-content-between align-items-center col-12">
            <h2 className="mt-2 mb-3 col-md-4 col-7">Search Result</h2>

            <select
              className={`form-select h-50 mb-3 ${styles.sort}`}
              aria-label="Default select example"
              onChange={handleSort}
            >
              <option selected>Sort By</option>
              <option value="title">A-Z</option>
              <option value="created_at">Date</option>
              <option value="recipe_id">ID</option>
            </select>
          </div>
          {/* <small className="mb-4">Showing result containing "{q}"</small> */}
          <div className="d-flex flex-md-row flex-column justify-content-between justify-content-md-start flex-wrap">
            {recipe ? (
              recipe.length > 0 ? (
                recipe.map((item) => (
                  <Card
                    img={item.photo}
                    title={item.title}
                    onclick={() => navigate(`/${item.recipe_id}`)}
                    style={{ marginLeft: "0" }}
                  />
                ))
              ) : (
                <h3>No recipe found</h3>
              )
            ) : (
              ""
            )}
          </div>

          <div className={`${styles["page-container"]}`}>
            {new Array(pagination.totalPage).fill().map((item, index) => (
              <button onClick={() => handlePage(index + 1)} key={index}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Search;
