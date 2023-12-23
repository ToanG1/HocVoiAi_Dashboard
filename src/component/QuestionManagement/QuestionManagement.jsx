import React, { useState, useEffect } from "react";
import styles from "./QuestionManagement.scss";

import DataTable from "../common/DataTable/DataTable";

import { getQuestions } from "../../api/question";

export default function QuestionManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    getQuestions()
      .then((res) => {
        if (res.code === 200) {
          console.log(res.data.data);
          setData(res.data.data);
          setPages(Math.ceil(res.data.totalItems / res.data.limit));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="title">Page QuestionManagement</div>
      <DataTable data={data} pages={pages} />
    </>
  );
}
