import React, { useState, useEffect } from "react";
import styles from "./UserManagement.scss";

import DataTable from "../common/DataTable/DataTable";

import { getUsers } from "../../api/user";

export default function UserManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    getUsers()
      .then((res) => {
        if (res.code === 200) {
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
      <div className="title">Page UserManagement</div>
      <DataTable data={data} pages={pages} />
    </>
  );
}
