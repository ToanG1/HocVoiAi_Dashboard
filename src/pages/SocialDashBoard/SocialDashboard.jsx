import React, { useState, useEffect } from "react";
import styles from "./SocialDashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import MainPage from "../../component/Roadmap/MainPage/MainPage";
import PostManagement from "../../component/Social/PostManagement/PostManagement";
import logo from "../../assets/images/logo.png";

import { checkAuthenticationInApp } from "../../services/common";
import { ToastContainer } from "react-toastify";

function handleRemoveActivate() {
  const items = document.getElementsByClassName("nav-item");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
}

export default function SocialDashboard() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    checkAuthenticationInApp();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="center">
        <div className="left">
          <div
            className="logo"
            onClick={(e) => {
              setPage(1);
              handleRemoveActivate();
              e.currentTarget.classList.add("active");
            }}
          >
            <img src={logo} alt="Hoc Voi Ai ADMIN" />
            <p>Dashboard</p>
          </div>

          <div className="navigation">
            <ul>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(2);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
                <span>Post</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">{renderPage(page)}</div>
      </div>
    </>
  );
}

function renderPage(page) {
  switch (page) {
    case 1:
      return <MainPage />;
    case 2:
      return <PostManagement />;
    default:
      return <MainPage />;
  }
}
