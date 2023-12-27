import React, { useState, useEffect } from "react";
import styles from "./QuestionManagement.scss";

import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";
import DataTable from "../common/DataTable/DataTable";

import { getQuestions,getChartData, updateQuestion,deleteQuestion } from "../../api/question";
import { toast } from "react-toastify";
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
    dataByActivation: null,
    dataByInteraction: null,
  });
  useEffect(() => {
    getQuestions()
      .then((res) => {
        if (res.code === 200) {
          const result = res.data.data.map((item) => {
            const { replies, comments, content, ...rest } = item;
            return rest;
          });

          setData(result);
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
      const chartByCategoryData = await handleGetChartData("category")
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
      const chartByInteraction = await handleGetChartData("interaction")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      setChartData({
        dataByMonth: chartByMonthData,
        dataByCategory: chartByCategoryData,
        dataByActivation: chartByActivationData,
        dataByInteraction: chartByInteraction,
      });
    };
    getData();
  }, []);
  function handleUpdateRow(data) {
    console.log("update", data);
    updateQuestion(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Update question successfully", {
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
    deleteQuestion(data.id)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Delete question successfully", {
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
      <div className="title">Page QuestionManagement</div>
      <div className="chart-container">
        <LineChart data={chartData.dataByMonth} />
        <PolarAreaChart data={chartData.dataByCategory} />
        <RadarChart data={chartData.dataByInteraction} />
        <DoughnutChart data={chartData.dataByActivation} />
        <VerticalChart />
      </div>

      <DataTable data={data} pages={pages}  updateData={handleUpdateRow} deleteData={handleDeleteRow}/>
    </>
  );
}
