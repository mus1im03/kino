import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../features/applicationSlice";
import { Link } from "react-router-dom";
import "../Pages/styless.module.css"; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();

  const handleSetName = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    dispatch(authSignIn({ email, password }));
    console.log(email, password);
  };

  return (
    <form className="form" onSubmit={handleSignIn}>
      <input
        className="form-input"
        type="text"
        value={email}
        placeholder="email"
        onChange={handleSetName}
      />
      <br />
      <input
        className="form-input"
        type="password"
        value={password}
        placeholder="password"
        onChange={handleSetPass}
      />
      <br />
      <button className="btn" type="submit">
        Войти
      </button>
      <p className="registration-link">
        <Link to="/auth">
          <b>Зарегистрируйтесь</b>
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
