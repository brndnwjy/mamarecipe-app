import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";

import Banner from "../../../components/module/auth-banner";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";

const Reset = () => {
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
            Create new password for your account
          </p>
          <div className={styles.hl} />
          <form className={`d-flex flex-column ${styles.form}`}>
            <Input
              label="Create New Password"
              id="password"
              name="password"
              type="password"
              placeholder="Create New Password"
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <Input
              label="Confirm Password"
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Your Password"
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <div className={`d-flex align-items-center ${styles.tnc}`}>
              <input type="checkbox" />
              <span>I agree to terms & conditions</span>
            </div>
            <Button
              title="Reset Password"
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

export default Reset;
