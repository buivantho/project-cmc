import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconEmail,
  IconPassword,
  logo,
  IconFullName,
  sub_logo,
} from "../../assets/index.tsx";
import "./styles.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  console.log({ user });

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "The password is Too Short!")
      .max(50, "The password is Too Long!")
      .required("This field is Required"),
    full_name: Yup.string().required("This field is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is Required"),
  });

  const _handleRegister = (values) => {
    const user = {
      token: Math.random().toString(36).slice(2, 30),
      data: {
        full_name: values.full_name,
        email: values.email,
      },
    };

    console.log({ user });

    dispatch(login(user));
    toast("Register successfully!", {
      autoClose: 1500,
    });
  };

  return (
    <>
      <div className="register-header">
        <img src={sub_logo} className="login-form__logo" />
        <Link to="/login" className="register-header__btn-login">
          Sign in
        </Link>
      </div>
      <Formik
        initialValues={{
          password: "",
          email: "",
          full_name: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={_handleRegister}
        validateOnChange={false}
      >
        {({ errors, values, handleChange, handleSubmit }) => (
          <div className="login-form">
            <img src={logo} className="login-form__logo" />
            <div className="login-form__container">
              <div>
                <div className="login-form__block">
                  <IconFullName />
                  <span className="login-form__label">Full name</span>
                </div>
                <input
                  className="login-form__input"
                  value={values.full_name}
                  name="full_name"
                  onChange={handleChange}
                />
                {errors.full_name && (
                  <div className="form-errors__message">{errors.full_name}</div>
                )}
              </div>
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
                  type="email"
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
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="form-errors__message">{errors.password}</div>
                )}
              </div>
              <div className="login-form__register">
                <button
                  className="login-form__btn-submit"
                  onClick={handleSubmit}
                >
                  <span className="login-form__btn-submit__title">
                    Register
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
