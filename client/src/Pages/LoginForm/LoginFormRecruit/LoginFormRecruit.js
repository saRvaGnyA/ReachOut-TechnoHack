import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFormRecruit.css";
const LoginFormRecruit = () => {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const host = "https://reachout-server.herokuapp.com";

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${host}/api/company/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const company = await response.json();
    console.log(company);
    localStorage.setItem("auth-token", company.authToken);
    setTimeout(() => {
      history("/recruit", { replace: true });
    }, 100);
  };

  return (
    <div className="login bg-gray-900">
      {/* <img className="wave z" src="https://lh3.googleusercontent.com/knryCgwtENwj9-QIcq5mQG5hK6PikEpkExZXsKJKej1ATyFaCx-hpoJdQKBDqCVtxPRa2c_w9Bu13lMjXba90MPGzlsngO6kzlGEAVh1v-Vgqzz1tLIxodhdVpNN6wuytP_Vcs3FJw=w2400" alt=""/> */}
      <div className="form-container">
        <div className="img-bg">
          <img
            src="https://lh3.googleusercontent.com/YVg4YPQXmvmph-HNtIWmjqLKTefRpsmx7-FN9QnvanrTKNSFzIS2lH7bRy3HnvbQcKMw5OvsXn7AdjNSBQDdDcgJbHVaqJMo-o2qBnKWieWJSAvrD2fYxOkF8IEBPfNgJOqjpchc3A=w2400"
            alt=""
          />
        </div>
        <div className="login-content">
          <form className="login-form">
            <h2 className="title text-white text-bold">Login to List a Job</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email addresss"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>
            </div>
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
            <input
              type="submit"
              className="btn-login"
              value="Login"
              onClick={submitHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormRecruit;
