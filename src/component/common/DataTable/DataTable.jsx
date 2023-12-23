import React, { useState } from "react";
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

export default function DataTable({ data, pages }) {
  const [selectedRow, setSelectedRow] = useState({});

  function handleSelectRow(row) {
    setSelectedRow(row);
  }
  //Render for DataTable
  function renderDataRow(item) {
    return Object.entries(item).map(([key, value]) => {
      return renderCellData(value, typeof value);
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
      if (typeof value !== "object")
        return (
          <div>
            <p>{key}:</p> {renderDataField(value, typeof value, key)}
          </div>
        );
    });
  }

  function renderDataField(data, type, key) {
    if (!isNaN(new Date(data)) && type === "string")
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
    console.log(page);
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
                  {properties.map((header) => (
                    <th>{header}</th>
                  ))}
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
              <button>Cancel</button>
              <button id="update">Update</button>
              <button id="delete">Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
