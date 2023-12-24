import React, { useState, useEffect } from "react";
import styles from "./UserManagement.scss";

import DataTable from "../common/DataTable/DataTable";
import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";
import { getUsers, getChartData } from "../../api/user";

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
    dataByActivation: null,
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

      <DataTable data={data} pages={pages} />
    </>
  );
}
