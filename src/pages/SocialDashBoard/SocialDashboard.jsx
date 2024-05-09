import React, { useState, useEffect } from "react";
import styles from "./SocialDashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUser,
  faCircleQuestion,
  faMessage,
  faFlag,
  faLayerGroup,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import MainPage from "../../component/Roadmap/MainPage/MainPage";
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
                <span>Category</span>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(4);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span>User</span>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(5);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faMessage} />
                </i>
                <span>Message</span>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(6);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <span>Questions</span>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(7);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faFlag} />
                </i>
                <span>Report</span>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setPage(8);
                  handleRemoveActivate();
                  e.currentTarget.classList.add("active");
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faLayerGroup} />
                </i>
                <span>Roadmap</span>
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
      return <h1>2</h1>;
    default:
      return <MainPage />;
  }
}
