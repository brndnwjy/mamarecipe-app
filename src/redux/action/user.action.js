import axios from "axios";
import swal from "sweetalert"

export const login = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/user/login`,
      dataForm
    );
    const user = result.data.data;
    swal({
      title: "Logged In",
      text: `Welcome ${user.user.name}`,
      icon: "success",
    });
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user.user));
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    navigate("/");
  } catch (error) {
    swal({
      title: "Invalid",
      text: `E-mail or Password invalid`,
      icon: "error",
    });
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
    swal({
      title: "Registered",
      text: `Your account successfully registered`,
      icon: "success",
    });
    dispatch({ type: "REGISTER_SUCCESS" });
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({ type: "REGISTER_ERROR" });
  }
};
