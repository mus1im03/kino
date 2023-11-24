import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../features/applicationSlice";
import { Link } from "react-router-dom";
import "../Pages/styles.module.css"; 


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емайл не может быть пустым");
  const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
  const [formValid, setFormValid] = useState(false);
    const  dispatch = useDispatch()

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  const handle = (e)=>{
    e.preventDefault()
    dispatch(authSignUp({ email, password}))
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    e.preventDefault()
    setPassword(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен быть длинее 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("Пароль должен быть длинее 3 и меньше 8");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <form onSubmit={handle} className="form">
      {(emailDirty && emailError) && (
        <div className="error-message">{emailError}</div>
      )}
      <input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        name="email"
        type="email"
        placeholder="email"
      />
      <br />
      {(passwordDirty && passwordError) && (
        <div className="error-message">{passwordError}</div>
      )}
      <input
        onChange={(e) => passwordHandler(e)}
        value={password}
        onBlur={(e) => blurHandler(e)}
        name="password"
        type="password"
        placeholder="password"
      />
      <br />
      <button disabled={!formValid} type="submit">
        Регистрация
      </button>
      <p>
        <Link to="/login">
          <b>Войдите</b>
        </Link>
      </p>
    </form>
  );
};

export default SignUp;