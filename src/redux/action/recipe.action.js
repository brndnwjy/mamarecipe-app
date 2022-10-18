import axios from "axios";

export const getAll = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/recipe`
    );
    const recipe = result.data.data;
    console.log("ini recipe")
    console.log(recipe);
    dispatch({ type: "GET_ALL_SUCCESS", payload: recipe });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_ALL_ERROR" });
  }
};

export const getMyRecipe = (token) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_RECIPE_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/recipe/myrecipe`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const recipe = result.data.data;
    console.log(recipe);
    dispatch({ type: "GET_MY_RECIPE_SUCCESS", payload: recipe });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_MY_RECIPE_ERROR" });
  }
};

export const addRecipe = (formData, token, navigate) => async(dispatch) => {
  try {
    dispatch({type: "ADD_RECIPE_PENDING"})
    const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/recipe/`, formData, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(result.data.message)
    dispatch({type: "ADD_RECIPE_SUCCESS"})
    navigate("/")
  } catch (error) {
    console.log(error)
    dispatch({type: "ADD_RECIPE_ERROR"})
  }
}

export const updateRecipe = (formData, token, id, navigate) => async(dispatch) => {
  try {
    dispatch({type: "UPDATE_RECIPE_PENDING"})
    const result = await axios.put(`${process.env.REACT_APP_API_BACKEND}/recipe/${id}`, formData, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(result.data.message)
    dispatch({type: "UPDATE_RECIPE_SUCCESS"})
    navigate("/profile")
  } catch (error) {
    console.log(error)
    dispatch({type: "UPDATE_RECIPE_ERROR"})
  }
}

export const deleteRecipe = (token, id, navigate) => async(dispatch) => {
  try {
    dispatch({type: "DELETE_RECIPE_PENDING"})
    const result = await axios.delete(`${process.env.REACT_APP_API_BACKEND}/recipe/${id}`, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(result.data.message)
    dispatch({type: "DELETE_RECIPE_SUCCESS"})
    navigate("/profile")
  } catch (error) {
    console.log(error)
    dispatch({type: "DELETE_RECIPE_ERROR"})
  }
}