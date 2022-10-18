import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navi from "../../components/module/navi";
import Footer from "../../components/module/footer";
import Card from "../../components/module/card";

import styles from "./search.module.css";

import searchicon from "../../assets/searchicon.svg";
import { getAll, searchRecipe } from "../../redux/action/recipe.action";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { recipe: data, pagination } = useSelector(
    (state) => state.recipe.recipe
  );

  const queryParams = new URLSearchParams(window.location.search);
  const q = queryParams.get("q");

  const [search, setSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams(search);
      navigate(`/search?q=${search}`);
    }
  };

  const handlePagination = async(page) => {
    try {
        dispatch(getAll(page))
    } catch (error) {
        console.log(error)
    }
  }

  const handlePage = (page) => {
    filterRecipe(page)
  };

  //   const searchRecipe = async (key) => {
  //     const result = await axios.get(
  //       `${process.env.REACT_APP_API_BACKEND}/recipe?search=${key}`
  //     );
  //     setRecipe(result.data.data);
  //   };

  const filterRecipe = async (page) => {
    try {
      let keyword = searchParams.get("q");
      if (searchParams === null) {
        keyword = "";
      }
      dispatch(searchRecipe(keyword, page));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navi />

      <main>
        <section className="container mt-5 d-flex flex-column align-items-center">
          <div
            className={`d-flex align-items-center col-8 ${styles.searchbar}`}
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
          <h2 className="mt-2 mb-1">Search Result</h2>
          <small className="mb-4">Showing result containing "{q}"</small>
          <div className="d-flex flex-md-row flex-column justify-content-between justify-content-md-start flex-wrap">
            {data ? (
              data.length > 0 ? (
                data.map((item) => (
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
            {new Array(pagination.totalPage)
              .fill()
              .map((item, index) => (
                <button
                  onClick={() => handlePage(index + 1)}
                  key={index}
                >
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
