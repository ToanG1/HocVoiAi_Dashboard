import React, { useState, useEffect } from "react";
import styles from "./ReportManagement.scss";

import DataTable from "../common/DataTable/DataTable";
import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";

import { getReports, getChartData } from "../../api/report";

const handleGetChartData = async (type) => {
  const res = await getChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};

export default function ReportManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByType: null,
    dataByProgress: null,
    dataByLanguage: null,
  });
  useEffect(() => {
    // get chart data
    const getData = async () => {
      const chartByMonthData = await handleGetChartData("month")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByTypeData = await handleGetChartData("report-type")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByProgress = await handleGetChartData("progress")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      setChartData({
        dataByMonth: chartByMonthData,
        dataByType: chartByTypeData,
        dataByProgress: chartByProgress,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    // get all Roadmaps to show in table
    getReports(currentPage, 10)
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

  function handleUpdateRow() {}
  function handleDeleteRow() {}

  return (
    <>
      <div className="title">Report Management</div>
      <div className="chart-container">
        <LineChart data={chartData.dataByMonth} />
        <PolarAreaChart data={chartData.dataByType} />
        {/* <RadarChart data={chartData.dataByLanguage} /> */}
        <DoughnutChart data={chartData.dataByProgress} />
        {/* <VerticalChart data={chartData.dataByType} /> */}
      </div>

      <DataTable
        data={data}
        pages={pages}
        onPageChange={setCurrentPage}
        updateData={handleUpdateRow}
        deleteData={handleDeleteRow}
      />
    </>
  );
}
