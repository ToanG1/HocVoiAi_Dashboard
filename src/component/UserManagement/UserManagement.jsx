import React, { useState, useEffect } from "react";
import styles from "./UserManagement.scss";

import DataTable from "../common/DataTable/DataTable";
import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";

import { toast } from "react-toastify";

import { getUsers,getChartData,updateUsers,deleteUsers } from "../../api/user";
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
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByCategory: null,
  });
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
      const getData = async () => {
        const chartByMonthData = await handleGetChartData("month")
          .then((res) => res)
          .catch((err) => {
            console.log(err);
            return null;
          });
        const chartByCategoryData = await handleGetChartData("user")
          .then((res) => res)
          .catch((err) => {
            console.log(err);
            return null;
          });
  
        setChartData({
          dataByMonth: chartByMonthData,
          dataByCategory: chartByCategoryData,
        });
      };
    getData();



  }, []);
  function handleUpdateRow(data) {
    console.log("update", data);
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
    console.log("delete", data);
    deleteUsers(data.id)
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
      <LineChart data={chartData.dataByMonth} />
      <PolarAreaChart data={chartData.dataByQuestion} />
      <RadarChart />
      <DoughnutChart />
      <VerticalChart />

      <DataTable data={data} pages={pages} updateData={handleUpdateRow} deleteData={handleDeleteRow}/>
    </>
  );
}
