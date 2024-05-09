import React, { useState, useEffect } from "react";
import styles from "./RoadmapManagement.scss";

import DataTable from "../../common/DataTable/DataTable";

import { VerticalChart } from "../../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../../common/Chart/RadarChart/RadarChart";

import {
  getRoadmaps,
  getChartData,
  updateRoadmap,
  deleteRoadmap,
} from "../../../api/roadmap";

import { toast } from "react-toastify";

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
  const [currentPage, setCurrentPage] = useState(0);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByCategory: null,
    dataByLevel: null,
    dataByLanguage: null,
    dataByType: null,
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
      const chartByCategoryData = await handleGetChartData("category")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByRoadmapLevel = await handleGetChartData("roadmap-level")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByRoadmapLanguage = await handleGetChartData(
        "roadmap-language"
      )
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      const chartByRoadmapType = await handleGetChartData("roadmap-type")
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return null;
        });
      setChartData({
        dataByMonth: chartByMonthData,
        dataByCategory: chartByCategoryData,
        dataByLevel: chartByRoadmapLevel,
        dataByLanguage: chartByRoadmapLanguage,
        dataByType: chartByRoadmapType,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    // get all Roadmaps to show in table
    getRoadmaps(currentPage, 10)
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

  function handleUpdateRow(data) {
    updateRoadmap(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Update roadmap successfully", {
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
    deleteRoadmap(data.id)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Ban roadmap successfully", {
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
      <div className="title">Roadmap Management</div>
      <div className="chart-container">
        <LineChart data={chartData.dataByMonth} />
        <PolarAreaChart data={chartData.dataByCategory} />
        <RadarChart data={chartData.dataByLanguage} />
        <DoughnutChart data={chartData.dataByLevel} />
        <VerticalChart data={chartData.dataByType} />
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
