import React, { useState, useEffect } from "react";
import styles from "./Dashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faList,
  faTag,
  faUser,
  faCircleQuestion,
  faMessage,
  faCircleExclamation,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import MainPage from "../../component/MainPage/MainPage";
import PageManagement from "../../component/PageManagement/PageManagement";
import CategoryManagement from "../../component/CategoryManagement/CategoryManagement";
import Message from "../../component/Message/Message";
import TagManagement from "../../component/TagManagement/TagManagement";
import UserManagement from "../../component/UserManagement/UserManagement";
import QuestionManagement from "../../component/QuestionManagement/QuestionManagement";
import WarningManagement from "../../component/WarningManagement/WarningManagement";
import RoadmapManagement from "../../component/RoadmapManagement/RoadmapManagement";
import logo from "../../assets/images/logo.png";

import { checkAuthenticationInApp } from "../../services/common";

export default function Dashboard() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    checkAuthenticationInApp();
  }, []);

  return (
    <>
      <div className="center">
        <div className="left">
          <div className="logo" onClick={() => setPage(0)}>
            <img src={logo} alt="Hoc Voi Ai ADMIN" />
            <p>Dashboard</p>
          </div>

          <div className="navigation">
            <ul>
              <li onClick={() => setPage(1)}>
                <i>
                  <FontAwesomeIcon icon={faCompass} />
                </i>
                <span>Page</span>
              </li>
              <li onClick={() => setPage(2)}>
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
                <span>Category</span>
              </li>
              <li onClick={() => setPage(3)}>
                <i>
                  <FontAwesomeIcon icon={faTag} />
                </i>
                <span>Tag</span>
              </li>
              <li onClick={() => setPage(4)}>
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span>User</span>
              </li>
              <li onClick={() => setPage(5)}>
                <i>
                  <FontAwesomeIcon icon={faMessage} />
                </i>
                <span>Message</span>
              </li>
              <li onClick={() => setPage(6)}>
                <i>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <span>Questions</span>
              </li>
              <li onClick={() => setPage(7)}>
                <i>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </i>
                <span>Warning</span>
              </li>
              <li onClick={() => setPage(8)}>
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
