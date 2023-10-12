import React, { useState } from "react";
import "./FormSidebar.scss";
import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import FormDropdown from "../Dropdown/FormDropdown/FormDropdown";
import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import FileInput from "../FileInput/FileInput";

const FormSidebar = () => {
  const [value, setValue] = useState("");
  const formData = useSelector((state) => state.main.form);
  const [type, setType] = useState("rad__stream");

  const typeOptions = [
    { name: "JSON", icon: <BiSolidFileJson />, color: "#F7DF1E" },
    {
      name: "XML",
      icon: <BsFiletypeXml />,
      color: "#F05032",
    },
    { name: "CSV", icon: <FaFileCsv />, color: "#1E88E5" },
  ];

  const methodOption = [
    { name: "Storm" },
    { name: "Kafka" },
    {
      name: "Google cloud dataflow",
    },
    { name: "Amazon kinesis" },
  ];

  return (
    <div className="Form_sidebar">
      <div className="header">Edit your source</div>
      <div className="form_container">
        <div className="form_item">
          <label>Processing type</label>

          <div className="radios_container">
            <div
              className={`radio_item ${type == "rad__stream" ? "active" : ""}`}
              onClick={() => {
                setType("rad__stream");
                setValue("");
              }}
            >
              Stream
            </div>
            <div
              className={`radio_item ${type == "rad__batch" ? "active" : ""}`}
              onClick={() => {
                setType("rad__batch");
                setValue("");
              }}
            >
              Batch
            </div>
          </div>
          <div className="radios_container"></div>
        </div>
        <div className="form_item">
          <label>Method</label>
          <FormDropdown
            placeholder={"Select a type"}
            data={type == "rad__stream" ? methodOption : typeOptions}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className="form_item">
          <label>Path</label>
          <input type="text" placeholder="Enter the path" />
        </div>
        {/* <div className="form_item">
          <label>File</label>
          <FileInput />
        </div> */}
      </div>
    </div>
  );
};

export default FormSidebar;
