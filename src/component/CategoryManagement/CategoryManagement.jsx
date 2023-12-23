import React, { useState, useEffect } from "react";
import styles from "./CategoryManagement.scss";
import DataTable from "../common/DataTable/DataTable";

import { getCategories } from "../../api/category";

export default function CategoryManagement() {
  const [category, setCategory] = useState([]);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    getCategories()
      .then((res) => {
        if (res.code === 200) {
          setCategory(res.data.data);
          setPages(Math.ceil(res.data.totalItems / res.data.limit));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="title">Page CategoryManagement</div>
      <DataTable data={category} pages={pages} />
    </>
  );
}
