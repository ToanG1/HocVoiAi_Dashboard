import React, { useState, useEffect } from "react";
import styles from "./CategoryManagement.scss";
import DataTable from "../common/DataTable/DataTable";
import { VerticalChart } from "../common/Chart/VerticalChart/VerticalChart";
import { DoughnutChart } from "../common/Chart/DoughnutChart/DoughnutChart";
import { LineChart } from "../common/Chart/LineChart/LineChart";
import { PolarAreaChart } from "../common/Chart/PolarAreaChart/PolarAreaChart";
import { RadarChart } from "../common/Chart/RadarChart/RadarChart";
import { getCategories , getChartData,updateCategory,deleteCategory} from "../../api/category";
import { toast } from "react-toastify";
const handleGetChartData = async (type) => {
  const res = await getChartData(type);
  if (res.code === 200) {
    return res.data;
  } else {
    return null;
  }
};
export default function CategoryManagement() {
  const [category, setCategory] = useState([]);
  const [pages, setPages] = useState(0);
  const [chartData, setChartData] = useState({
    dataByMonth: null,
    dataByCategory: null,
  });
  useEffect(() => {
    getCategories()
      .then((res) => {
        if (res.code === 200) {
          setCategory(res.data.data);
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
  
        setChartData({
          dataByMonth: chartByMonthData,
          dataByCategory: chartByCategoryData,
        });
      };
    getData();



  }, []);
  function handleUpdateRow(data) {
    console.log("update", data);
    updateCategory(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Update Category  successfully", {
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
    deleteCategory(data.id)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Delete Category  successfully", {
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
      <div className="title">Page Category Management</div>
      <LineChart data={chartData.dataByMonth} />
      <PolarAreaChart data={chartData.dataByCategory} />
      <RadarChart />
      <DoughnutChart />
      <VerticalChart />
      <DataTable data={category} pages={pages} updateData={handleUpdateRow}deleteData={handleDeleteRow}/>
     
    </>
  );
}
