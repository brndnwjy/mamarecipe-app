import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";

import Banner from "../../../components/module/auth-banner";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";

const Verification = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <div className={styles.wrapper}>
        <div className="col-md-5">
          <Banner />
        </div>
        <div
          className={`col-12 col-md-7 d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className={styles.title}>Reset Your Password</h1>
          <p className={styles.subtitle}>
            Enter the code we've sent to your e-mail to reset your password
          </p>
          <div className={styles.hl} />
          <form className={`d-flex flex-column ${styles.form}`}>
            <Input
              label="Verification Code"
              id="password"
              name="password"
              type="password"
              placeholder="Enter the 6 digits code"
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <Button
              title="Confirm Code"
              type="button"
              classname={`mt-3 ${styles.button}`}
            />
            <p className={`mt-2 align-self-center ${styles["auth-opt"]}`}>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verification;
