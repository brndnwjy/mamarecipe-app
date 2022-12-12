import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/action/user.action";
import styles from "../auth.module.css";

import Banner from "../../../components/module/auth-banner";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import swal from "sweetalert";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [tnc, setTnc] = useState(false);

  const handleInput = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tnc) {
      return swal({
        title: "Invalid",
        text: `Please check the box before logging in`,
        icon: "error",
      });
    }

    dispatch(login(loginForm, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Log In</title>
        <link rel="icon" type="image/x-icon" href="/src/assets/logo.svg" />
      </Helmet>
      <div className={styles.wrapper}>
        <div className="col-md-5">
          <Banner />
        </div>
        <div
          className={`col-12 col-md-7 d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className={styles.title}>Welcome</h1>
          <p className={styles.subtitle}>Log in into your exsisting account</p>
          <div className={styles.hl} />
          <form
            onSubmit={handleSubmit}
            className={`d-flex flex-column ${styles.form}`}
          >
            <Input
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="examplexxx@gmail.com"
              onchange={handleInput}
              value={loginForm.email}
              classname={`my-2 ${styles.input}`}
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onchange={handleInput}
              value={loginForm.password}
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <div className={`d-flex align-items-center ${styles.tnc}`}>
              <input type="checkbox" onClick={() => setTnc(true)} />
              <span>I agree to terms & conditions</span>
            </div>
            <Button
              title="Log In"
              type="submit"
              classname={`mt-3 ${styles.button}`}
            />
            <small className={`my-3 align-self-end ${styles.small}`}>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </small>
            <p className={`mt-2 align-self-center ${styles["auth-opt"]}`}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
