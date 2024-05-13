import React, { useState, useEffect } from "react";
import styles from "./RoadmapDashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUser,
  faCircleQuestion,
  faMessage,
  faFlag,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import MainPage from "../../component/Roadmap/MainPage/MainPage";
import PageManagement from "../../component/Roadmap/PageManagement/PageManagement";
import CategoryManagement from "../../component/Roadmap/CategoryManagement/CategoryManagement";
import Message from "../../component/Roadmap/Message/Message";
import TagManagement from "../../component/Roadmap/TagManagement/TagManagement";
import UserManagement from "../../component/Roadmap/UserManagement/UserManagement";
import QuestionManagement from "../../component/Roadmap/QuestionManagement/QuestionManagement";
import WarningManagement from "../../component/Roadmap/ReportManagement/ReportManagement";
import RoadmapManagement from "../../component/Roadmap/RoadmapManagement/RoadmapManagement";
import logo from "../../assets/images/logo.png";

import { checkAuthenticationInApp } from "../../services/common";
import { ToastContainer } from "react-toastify";

function handleRemoveActivate() {
  const items = document.getElementsByClassName("nav-item");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
}

export default function RoadmapDashboard() {
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
              setPage(0);
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
    case 0:
      return <MainPage />;
    case 1:
      return <PageManagement />;
    case 2:
      return <CategoryManagement />;
    case 3:
      return <TagManagement />;
    case 4:
      return <UserManagement />;
    case 5:
      return <Message />;
    case 6:
      return <QuestionManagement />;
    case 7:
      return <WarningManagement />;
    case 8:
      return <RoadmapManagement />;

    default:
      return <MainPage />;
  }
}
