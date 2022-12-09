import axios from "axios";
import swal from "sweetalert";

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
    dispatch({ type: "LOGIN_SUCCESS", payload: user.user });
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
    swal({
      title: "Register Failed",
      text: `Your E-mail have been registered`,
      icon: "error",
    });
    dispatch({ type: "REGISTER_ERROR" });
  }
};

export const update = (id, token, dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PENDING" });
    await axios.put(
      `${process.env.REACT_APP_API_BACKEND}/user/${id}`,
      dataForm, { headers : { Authorization : `Bearer ${token}`}}
    );
    swal({
      title: "Updated",
      text: `Your account successfully updated`,
      icon: "success",
    });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/user/${id}`
    );

    const user = result.data.data[0];

    dispatch({ type: "UPDATE_SUCCESS", payload: user });
    navigate("/");
  } catch (error) {
    console.log(error.response)
    swal({
      title: "Update Failed",
      text: `Make sure your data is correct`,
      icon: "error",
    });
    dispatch({ type: "UPDATE_ERROR" });
  }
};
