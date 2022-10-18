import axios from "axios";

export const login = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/user/login`,
      dataForm
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user.user));
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_ERROR" });
  }
};

export const register = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PENDING" });
    await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/user/register`,
      dataForm
    );
    dispatch({ type: "REGISTER_SUCCESS" });
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({ type: "REGISTER_ERROR" });
  }
};
