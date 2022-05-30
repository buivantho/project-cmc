import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IconEmail, IconPassword, logo } from "../../assets/index.tsx";
import "./styles.scss";
import { login } from "../../redux/index.tsx";

export default function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeText = (e, name) => {
    const nForm = { ...form };
    nForm[name] = e.target.value;
    setForm(nForm);
  };

  const _handleLogin = () => {
    const user = {
      token: Math.random().toString(36).slice(2, 30),
      data: {
        full_name: "",
        email: form.email,
      },
    };

    dispatch(login(user));
  };

  return (
    <div className="login-form">
      <img src={logo} className="login-form__logo" />
      <div className="login-form__container">
        <div>
          <div className="login-form__block">
            <IconEmail />
            <span className="login-form__label">Email address</span>
          </div>
          <input
            className="login-form__input"
            value={form.email}
            onChange={(e) => onChangeText(e, "email")}
          />
        </div>
        <div>
          <div className="login-form__block">
            <IconPassword />
            <span className="login-form__label">Password</span>
          </div>
          <input
            className="login-form__input"
            value={form.password}
            onChange={(e) => onChangeText(e, "password")}
            type="password"
          />
        </div>
        <div className="login-form__signin">
          <a href="#" style={{ textDecoration: "none" }}>
            <span className="login-form__forgot-password">
              Forgot password?
            </span>
          </a>
          <button className="login-form__btn-submit">
            <span className="login-form__btn-submit__title">Sign in</span>
          </button>
        </div>
        <Link to="/register" className="login-form__btn-account">
          Don’t have & account?
        </Link>
      </div>
    </div>
  );
}
