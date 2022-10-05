import React from "react";
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";
import styles from "../auth.module.css";

import Banner from "../../../components/module/auth-banner";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";

const Login = () => {
  return (
    <>
    <Helmet>
        <title>Log In</title>
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
        <form className={`d-flex flex-column ${styles.form}`}>
          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            placeholder="examplexxx@gmail.com"
            classname={`my-2 ${styles.input}`}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            classname={`mt-2 mb-3 ${styles.input}`}
          />
          <div className={`d-flex align-items-center ${styles.tnc}`}>
            <input type="checkbox" />
            <span>I agree to terms & conditions</span>
          </div>
          <Button
            title="Log In"
            type="button"
            classname={`mt-3 ${styles.button}`}
          />
          <small className={`my-3 align-self-end ${styles.small}`}>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </small>
          <p className={`mt-2 align-self-center ${styles['auth-opt']}`}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
