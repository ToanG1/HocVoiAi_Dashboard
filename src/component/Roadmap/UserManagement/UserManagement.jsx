import React, { useState, useEffect } from "react";
import styles from "./UserManagement.scss";

import DataTable from "../../common/DataTable/DataTable";
import { DoughnutChart } from "../../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../../common/Chart/LineChart/LineChart";

import { toast } from "react-toastify";

import {
  getUsers,
  getChartData,
  updateUsers,
  deleteUsers,
} from "../../../api/user";
const handleGetChartData = async (type) => {
  const res = await getChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};

export default function UserManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
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
    getUsers(currentPage)
      .then((res) => {
        if (res.code === 200) {
          setData(res.data.data);
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
    updateUsers(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Update Users successfully", {
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
    deleteUsers(data.uuid)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Delete Users successfully", {
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
        {/* <PolarAreaChart />
      <RadarChart /> */}
        <DoughnutChart data={chartData.dataByActivation} />
        {/* <VerticalChart /> */}
      </div>

      <DataTable
        data={data}
        pages={pages}
        onPageChange={handlePageChange}
        updateData={handleUpdateRow}
        deleteData={handleDeleteRow}
      />
    </>
  );
}
