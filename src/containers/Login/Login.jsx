import React from "react";
import "./Login.scss";
import car from "@/assets/images/car1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "@/store/actions";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (email === "" || password === "") {
      toast.error("Please enter email and password");
    } else if (email == "admin@gmail.com" && password == "admin@123") {
      dispatch(actions.authSuccess("token", "user"));
      navigate("/");
    }
  };

  return (
    <div className="Login">
      <div className="Login_wrapper">
        <div className="left container">
          <Link to="/">
            <div className="logo">
              <div className="circles"></div>
              <div className="text">Daffodils</div>
            </div>
          </Link>
          <div className="login_container">
            <div className="form_item">
              <div className="label">Email</div>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    login();
                  }
                }}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form_item">
              <div className="label">Password</div>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    login();
                  }
                }}
                placeholder="pass@123"
              />
            </div>

            <div className="btn_primary" onClick={login}>
              Login
            </div>
          </div>
        </div>
        <div className="right">
          <img src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
