import React from "react";
import "./BreadCrumb.scss";

const BreadCrumb = ({ path = [] }) => {
  return (
    <div className="Bread_crumb">
      {path.map((item, index) => (
        <div className="cumb_item" key={index}>
          <div className={`name ${index == path.length - 1 ? "last" : ""}`}>
            {item}
          </div>
          {index != path.length - 1 && <div className="arrow">{">"}</div>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
