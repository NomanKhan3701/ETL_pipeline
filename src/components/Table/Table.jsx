import React from "react";
import "./Table.scss";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

const Table = ({
  columns = [],
  rows = [],
  btn = false,
  onBtnClick,
  onRowClick,
  btnText,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return <th key={index}>{column}</th>;
            })}
            {btn && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  if (onRowClick) onRowClick(row);
                }}
              >
                {row.map((cell, index) => {
                  if (typeof cell !== "object") {
                    return <td key={index}>{cell}</td>;
                  }
                })}
                {btn && (
                  <td
                    onClick={(e) => {
                      e.stopPropagation();

                      if (onBtnClick) onBtnClick(row[row.length - 1].id);
                      else
                        setSearchParams({
                          actionForm: true,
                          id: row[row.length - 1].id,
                        });
                    }}
                  >
                    <div className="btn_secondary">
                      {btnText ? btnText : "Take Action"}
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
