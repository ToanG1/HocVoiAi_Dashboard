import React, { useEffect, useState } from "react";
import styles from "./DataTable.scss";

import Pagination from "../Pagination/Pagination";

import { renderFormatedDate } from "../../../services/common";

function getAllFieldNames(obj, prefix = "") {
  let fieldNames = [];

  for (const key in obj) {
    const fieldName = prefix + key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      // Recursively get field names from nested object
      const nestedFieldNames = getAllFieldNames(obj[key], fieldName + ".");
      fieldNames = fieldNames.concat(nestedFieldNames);
    } else {
      fieldNames.push(fieldName);
    }
  }

  return fieldNames;
}

export default function DataTable({
  data,
  pages,
  onPageChange,
  updateData,
  deleteData,
  createData,
}) {
  const [selectedRow, setSelectedRow] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (data[0]) {
      const newObject = Object.entries(data[0]).reduce(
        (result, [key, value]) => {
          const type = typeof value;

          if (key.toUpperCase().includes("ID")) {
            result[key] = 0;
          } else if (type !== "object") {
            if (
              !isNaN(new Date(value)) &&
              type === "string" &&
              isNaN(Number(value))
            ) {
              result[key] = new Date().toDateString();
            } else {
              switch (type) {
                case "number":
                  result[key] = 0;
                  break;
                case "boolean":
                  result[key] = false;
                  break;
                default:
                  result[key] = "";
              }
            }
          }

          return result;
        },
        {}
      );

      console.log(newObject);
      setSelectedRow(newObject);
    }
  }, [data]);

  function handleSelectRow(row) {
    setIsFirstLoad(false);
    setSelectedRow(row);
  }
  //Render for DataTable
  function renderDataRow(item) {
    return Object.entries(item).map(([key, value]) => {
      if (key !== "content") return renderCellData(value, typeof value);
    });
  }

  function renderCellData(data, type) {
    if (!isNaN(new Date(data)) && type === "string")
      return <td>{renderFormatedDate(data)}</td>;
    switch (type) {
      case "boolean":
        return (
          <td>
            <input type="checkbox" checked={data} readOnly />
          </td>
        );
      case "object":
        return renderDataRow(data);
      default:
        return <td>{data}</td>;
    }
  }

  //Render for DataBox
  function renderDataBox() {
    return Object.entries(selectedRow).map(([key, value]) => {
      if (typeof value !== "object") {
        if (key === "content")
          return (
            <div>
              <p>{key}:</p>
              <textarea
                value={value}
                onChange={(e) => {
                  setSelectedRow({ ...selectedRow, [key]: e.target.value });
                }}
              />
            </div>
          );
        else
          return (
            <div>
              <p>{key}:</p> {renderDataField(value, typeof value, key)}
            </div>
          );
      }
    });
  }

  function renderDataField(data, type, key) {
    if (!isNaN(new Date(data)) && type === "string" && isNaN(Number(data))) {
      return (
        <input
          type="date"
          value={renderFormatedDate(data)}
          onChange={(e) => {
            setSelectedRow({ ...selectedRow, [key]: e.target.value });
          }}
          format="YYYY-MM-DD"
        />
      );
    }

    switch (type) {
      case "boolean":
        return (
          <input
            type="checkbox"
            checked={data}
            onChange={(e) => {
              setSelectedRow({ ...selectedRow, [key]: e.target.checked });
            }}
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={data}
            onChange={(e) => {
              if (!key.toUpperCase().includes("ID"))
                setSelectedRow({
                  ...selectedRow,
                  [key]: parseFloat(e.target.value),
                });
            }}
          />
        );
      default:
        return (
          <input
            type="text"
            value={data}
            onChange={(e) => {
              if (!key.toUpperCase().includes("ID"))
                setSelectedRow({ ...selectedRow, [key]: e.target.value });
            }}
          />
        );
    }
  }

  function handlePageChange(page) {
    onPageChange(page + 1);
  }

  function handleDeselectRow() {
    setSelectedRow({});
  }

  function handleUpdateRow() {
    updateData(selectedRow);
  }

  function handleDeleteRow() {
    deleteData(selectedRow);
    handleDeselectRow();
  }

  function handleCreateRow() {
    createData(selectedRow);
    console.log(selectedRow);
  }

  if (data[0]) {
    const properties = getAllFieldNames(data[0]);

    return (
      <>
        <div className="datatable-container">
          <div className="data-table">
            <table className="fl-table">
              <thead>
                <tr>
                  {properties.map((header) =>
                    header !== "content" ? <th>{header}</th> : null
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr onClick={() => handleSelectRow(item)}>
                    {renderDataRow(item)}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <Pagination pages={pages} onPageChange={handlePageChange} />
            </div>
          </div>

          <div className="data-box">
            <h2>Data</h2>
            <div className="list-data-field">{renderDataBox()}</div>
            <div className="data-box-btn">
              {isFirstLoad ? (
                <button id="create" onClick={handleCreateRow}>
                  Create
                </button>
              ) : (
                <>
                  <button onClick={handleDeselectRow}>Cancel</button>
                  <button onClick={handleUpdateRow} id="update">
                    Update
                  </button>
                  <button onClick={handleDeleteRow} id="delete">
                    Ban
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
