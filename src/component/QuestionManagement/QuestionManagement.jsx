import React, { useState, useEffect } from "react";
import styles from "./QuestionManagement.scss";

import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";
import DataTable from "../common/DataTable/DataTable";

import { getQuestions,getChartData } from "../../api/question";
const handleGetChartData = async (type) => {
  const res = await getChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};

export default function QuestionManagement() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByCategory: null,
  });
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
      
      const getData = async () => {
        const chartByMonthData = await handleGetChartData("month")
          .then((res) => res)
          .catch((err) => {
            console.log(err);
            return null;
          });
        const chartByCategoryData = await handleGetChartData("question")
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
      <div className="title">Page Question Management</div>
      <LineChart data={chartData.dataByMonth} />
      <PolarAreaChart data={chartData.dataByQuestion} />
      <RadarChart />
      <DoughnutChart />
      <VerticalChart />
      
      <DataTable data={data} pages={pages} />
    </>
  );
}
