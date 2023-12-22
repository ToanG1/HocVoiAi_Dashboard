import React, { useState } from "react";
import styles from "./DataTable.scss";

import Pagination from "../Pagination/Pagination";

import { renderFormatedDateTime } from "../../../services/common";

export default function DataTable({ data }) {
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
    switch (type) {
      case "boolean":
        return (
          <td>
            <input type="checkbox" checked={data} readOnly />
          </td>
        );
      case "date":
        return renderFormatedDateTime(data);
      default:
        return <td>{data}</td>;
    }
  }

  //Render for DataBox
  function renderDataBox() {
    return Object.entries(selectedRow).map(([key, value]) => {
      return (
        <div>
          <p>{key}:</p> {renderDataField(value, typeof value, key)}
        </div>
      );
    });
  }

  function renderDataField(data, type, key) {
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
      case "date":
        return (
          <input
            type="date"
            value={data}
            onChange={(e) => {
              setSelectedRow({ ...selectedRow, [key]: e.target.value });
            }}
            format="YYYY-MM-DD HH:mm:ss"
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
    const properties = Object.keys(data[0]);

    return (
      <>
        <div className="datatable-container">
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
            <Pagination pages={10} onPageChange={handlePageChange} />
          </table>
          <div className="data-box">
            <h2>Data</h2>
            <div className="list-data-field">{renderDataBox()}</div>
          </div>
        </div>
      </>
    );
  }
}
