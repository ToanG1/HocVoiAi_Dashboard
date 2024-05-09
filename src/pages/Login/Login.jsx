import React from "react";
import styles from "./Login.scss";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import { login } from "../../api/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const domain = document.getElementById("select-domain").value;
    localStorage.clear();
    localStorage.setItem("DOMAIN", domain);
    login(email, password)
      .then((res) => {
        if (res) {
          navigate("/admin/" + domain);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <ToastContainer />
      <section className="login-container">
        <img src={logo} alt="logo" />
        <h1>Hoc Voi Ai Dashboard</h1>
        <form method="post">
          <input
            type="text"
            id="email"
            placeholder="Email"
            required="required"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required="required"
          />
          <select id="select-domain">
            <option value="roadmap">ROADMAP</option>
            <option value="social">SOCIAL</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
