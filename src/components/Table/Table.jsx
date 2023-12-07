import React from "react";
import "./Table.scss";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

const Table = ({ columns = [], rows = [], onRowClick }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return <th key={index}>{column.name}</th>;
            })}
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
                {Object.values(row).map((key, index) => {
                  return (
                    <td key={index}>
                      {Array.isArray(key) ? (
                        key.map((item, index) => {
                          return item.Dropdown ? (
                            <div className="dropdown_wrapper">
                              {item.Dropdown}
                            </div>
                          ) : item.Icon ? (
                            <div className="icon" onClick={item.onClick}>
                              {item.Icon}
                            </div>
                          ) : (
                            <div key={index} onClick={item.onClick}>
                              <span>{item.name}</span>
                            </div>
                          );
                        })
                      ) : typeof key === "number" ? (
                        <div className="progress_bar">
                          <div
                            className="progress"
                            style={{ width: `${key}%` }}
                          ></div>
                          <span>{key}%</span>
                        </div>
                      ) : typeof key === "string" &&
                        moment(key, "YYYY-MM-DD", true).isValid() ? (
                        <span>{moment(key).format("DD/MM/YYYY")}</span>
                      ) : (
                        <span>{key}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
