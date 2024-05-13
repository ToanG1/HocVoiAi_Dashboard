import React, { useState, useEffect } from "react";
import styles from "./UserManagement.scss";
import DataTable from "../../common/DataTable/DataTable";
import { toast } from "react-toastify";
import {
  getUserData,
  getUserChartData,
  createUser,
  updateUser,
  deleteUser,
} from "../../../api/user-social";

import { DoughnutChart } from "../../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../../common/Chart/LineChart/LineChart";

const handleGetChartData = async (type) => {
  const res = await getUserChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};
export default function UserManagement() {
  const [user, setUser] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByActivation: null,
  });
  useEffect(() => {
    const getData = async () => {
      const chartByMonthData = await handleGetChartData("month")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByActivationData = await handleGetChartData("activated")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      setChartData({
        dataByMonth: chartByMonthData,
        dataByActivation: chartByActivationData,
      });
    };
    getData();
  }, []);
  useEffect(() => {
    getUserData(currentPage)
      .then((res) => {
        if (res.code === 200) {
          setUser(res.data.data);
          setPages(Math.ceil(res.data.totalItems / res.data.limit));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleUpdateRow(data) {
    updateUser(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Update User successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
  }
  function handleDeleteRow(data) {
    deleteUser(data.id)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Delete User successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
  }
  function handleCreateRow(data) {
    createUser(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Create User successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
  }

  return (
    <>
      <div className="title">Page User Management</div>
      <div className="chart-container">
        <LineChart data={chartData.dataByMonth} />
        <DoughnutChart data={chartData.dataByActivation} />
      </div>
      <DataTable
        data={user}
        pages={pages}
        onPageChange={handlePageChange}
        updateData={handleUpdateRow}
        deleteData={handleDeleteRow}
        createData={handleCreateRow}
      />
    </>
  );
}
