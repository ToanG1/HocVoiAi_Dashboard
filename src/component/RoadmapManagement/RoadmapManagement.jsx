import React, { useState, useEffect } from "react";
import styles from "./RoadmapManagement.scss";

import DataTable from "../common/DataTable/DataTable";

import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";
import { getRoadmaps, getChartData } from "../../api/roadmap";

const handleGetChartData = async (type) => {
  const res = await getChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};

export default function RoadmapManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByCategory: null,
  });
  useEffect(() => {
    // get all Roadmaps to show in table
    getRoadmaps()
      .then((res) => {
        if (res.code === 200) {
          setData(res.data.data);
          setPages(Math.ceil(res.data.totalItems / res.data.limit));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // get chart data
    const getData = async () => {
      const chartByMonthData = await handleGetChartData("month")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByCategoryData = await handleGetChartData("category")
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

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);
  return (
    <>
      <div className="title">Page RoadmapManagement</div>
      <LineChart data={chartData.dataByMonth} />
      <PolarAreaChart data={chartData.dataByCategory} />
      <RadarChart />
      <DoughnutChart />
      <VerticalChart />

      <DataTable data={data} pages={pages} />
    </>
  );
}