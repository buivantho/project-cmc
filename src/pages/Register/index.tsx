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

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const onChangeText = (e, name) => {
    const nForm = { ...form };
    nForm[name] = e.target.value;
    setForm(nForm);
  };

  return (
    <>
      <div className="register-header">
        <img src={sub_logo} className="login-form__logo" />
        <Link to="/login" className="register-header__btn-login">
          Sign in
        </Link>
      </div>
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
              value={form.full_name}
              onChange={(e) => onChangeText(e, "full_name")}
            />
          </div>
          <div>
            <div className="login-form__block">
              <IconEmail />
              <span className="login-form__label">Email address</span>
            </div>
            <input
              className="login-form__input"
              value={form.email}
              onChange={(e) => onChangeText(e, "email")}
              type="email"
            />
          </div>
          <div>
            <div className="login-form__block">
              <IconPassword />
              <span className="login-form__label">Password</span>
            </div>
            <input
              className="login-form__input"
              type="password"
              value={form.password}
              onChange={(e) => onChangeText(e, "password")}
            />
          </div>
          <div className="login-form__register">
            <button className="login-form__btn-submit">
              <span className="login-form__btn-submit__title">Register</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
