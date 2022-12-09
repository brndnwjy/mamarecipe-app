import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../redux/action/user.action";
import swal from "sweetalert";
import styles from "../auth.module.css";

import Banner from "../../../components/module/auth-banner";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [tnc, setTnc] = useState(false);

  const handleInput = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const passwordValidate = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tnc) {
      return swal({
        title: "Invalid",
        text: `Please check the box before registering new account`,
        icon: "error",
      });
    }

    if (registerForm.password === confirmPassword) {
      dispatch(register(registerForm, navigate));
    } else {
      swal({
        title: "Invalid",
        text: `Your password doesn't match`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className={styles.wrapper}>
        <div className="col-md-5">
          <Banner />
        </div>
        <div
          className={`col-12 col-md-7 d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className={styles.title}>Let's Get Started</h1>
          <p className={styles.subtitle}>
            Create new account to access all features
          </p>
          <div className={styles.hl} />
          <form
            onSubmit={handleSubmit}
            className={`d-flex flex-column ${styles.form}`}
          >
            <Input
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onchange={handleInput}
              value={registerForm.name}
              classname={`my-2 ${styles.input}`}
            />
            <Input
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="examplexxx@gmail.com"
              onchange={handleInput}
              value={registerForm.email}
              classname={`my-2 ${styles.input}`}
            />
            <Input
              label="Phone Number"
              id="phone"
              name="phone"
              type="tel"
              placeholder="08xxxxxxxxxx"
              onchange={handleInput}
              value={registerForm.phone}
              classname={`my-2 ${styles.input}`}
            />
            <Input
              label="Create New Password"
              id="password"
              name="password"
              type="password"
              placeholder="Create New Password"
              onchange={handleInput}
              value={registerForm.password}
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <Input
              label="Confirm Password"
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Your Password"
              onchange={passwordValidate}
              value={confirmPassword}
              classname={`mt-2 mb-3 ${styles.input}`}
            />
            <div className={`d-flex align-items-center ${styles.tnc}`}>
              <input type="checkbox" onClick={() => setTnc(true)} />
              <span>I agree to terms & conditions</span>
            </div>
            <Button
              title="Register Account"
              type="submit"
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

export default Register;
