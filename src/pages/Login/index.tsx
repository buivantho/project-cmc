import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IconEmail, IconPassword, logo } from "../../assets/index.tsx";
import "./styles.scss";
import { login } from "../../redux/index.tsx";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  console.log({ user });

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "The password is Too Short!")
      .max(50, "The password is Too Long!")
      .required("This field is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is Required"),
  });

  const _handleLogin = (values) => {
    const user = {
      token: Math.random().toString(36).slice(2, 30),
      data: {
        full_name: values.email.substring(0, values.email.indexOf("@")),
        email: values.email,
      },
    };

    console.log({ user });

    dispatch(login(user));
  };

  return (
    <div className="login-form">
      <img src={logo} className="login-form__logo" />
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={_handleLogin}
        validateOnChange={false}
      >
        {({ errors, values, handleChange, handleSubmit }) => (
          <div className="login-form__container">
            <div>
              <div className="login-form__block">
                <IconEmail />
                <span className="login-form__label">Email address</span>
              </div>
              <input
                className="login-form__input"
                value={values.email}
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <div className="form-errors__message">{errors.email}</div>
              )}
            </div>
            <div>
              <div className="login-form__block">
                <IconPassword />
                <span className="login-form__label">Password</span>
              </div>
              <input
                className="login-form__input"
                value={values.password}
                name="password"
                onChange={handleChange}
                type="password"
              />
              {errors.password && (
                <div className="form-errors__message">{errors.password}</div>
              )}
            </div>
            <div className="login-form__signin">
              <a href="#" style={{ textDecoration: "none" }}>
                <span className="login-form__forgot-password">
                  Forgot password?
                </span>
              </a>
              <button className="login-form__btn-submit" onClick={handleSubmit}>
                <span className="login-form__btn-submit__title">Sign in</span>
              </button>
            </div>
            <Link to="/register" className="login-form__btn-account">
              Don’t have & account?
            </Link>
          </div>
        )}
      </Formik>
    </div>
  );
}
