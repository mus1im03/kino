import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../features/applicationSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Pages/SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();

  const [redirectToMain, setRedirectToMain] = useState(false);

  const signIn = useSelector((state) => state.application.singingIn)

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

  useEffect(() => {
    if (token) {
      setRedirectToMain(true);
    }
  }, [token]);

  useEffect(() => {
    if(signIn === true) {
      navigate('/')
    }
  }, [signIn]);

  return (
    <div>
      {redirectToMain && <Link to="/" />} {/* Redirect conditionally */}
      <form className={styles.form} onSubmit={handleSignIn}>
        <span className={styles.login_text}>Login</span>
        <input
          className={styles.form_input}
          type="text"
          value={email}
          placeholder="Email"
          onChange={handleSetName}
        />
        <br />
        <input
          className={styles.form_input}
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleSetPass}
        />
        <br />
         <button className={styles.btn} type="submit">
          Войти
        </button>
        <p className={styles.registration_link}>
          <Link to="/auth">
            <b>Зарегистрируйтесь</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;