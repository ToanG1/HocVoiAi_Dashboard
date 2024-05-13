import React, { useState, useEffect } from "react";
import styles from "./CategoryManagement.scss";
import DataTable from "../../common/DataTable/DataTable";
import {
  getCategories,
  updateCategory,
  deleteCategory,
  createCategory,
} from "../../../api/category";
import { toast } from "react-toastify";

export default function CategoryManagement() {
  const [category, setCategory] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCategories(currentPage)
      .then((res) => {
        if (res.code === 200) {
          setCategory(res.data.data);
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
  function handleCreateRow(data) {
    createCategory(data)
      .then((res) => {
        if (res.code === 200) {
          toast.success("Create Category  successfully", {
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
      <DataTable
        data={category}
        pages={pages}
        onPageChange={handlePageChange}
        updateData={handleUpdateRow}
        deleteData={handleDeleteRow}
        createData={handleCreateRow}
      />
    </>
  );
}
