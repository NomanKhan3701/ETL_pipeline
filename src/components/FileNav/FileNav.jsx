import React from "react";
import "./FileNav.scss";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { BsFileEarmarkCode, BsFileEarmarkCodeFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const FileNav = () => {
  const location = useLocation();
  const homeTabActive = location.pathname === "/";
  const files = [
    {
      name: "Pipeline 1",
      active: true,
    },
    {
      name: "Pipeline 2",
      active: false,
    },
    {
      name: "Pipeline 3",
      active: false,
    },
  ];

  return (
    <div className="File_nav">
      <Link to={"/"} className={`home_tab ${homeTabActive ? "active" : ""}`}>
        {homeTabActive ? <GoHomeFill /> : <GoHome />}
      </Link>

      <div className="files_container hide_scrollbar">
        {files.map((file, index) => {
          return (
            <Link
              className={`file_item ${
                file.active && !homeTabActive ? "active" : ""
              }`}
              key={index}
              to={"/1"}
            >
              <div className="icon">
                <BsFileEarmarkCode />
              </div>
              <div className="name">{file.name}</div>
              <div className={`cross ${file.active ? "active" : ""}`}>
                <AiOutlineClose />
              </div>
            </Link>
          );
        })}
        <div className="add_btn">
          <AiOutlinePlus />
        </div>
      </div>
      {/* <div className="right_utils">ashdfjhasd</div> */}
    </div>
  );
};

export default FileNav;
