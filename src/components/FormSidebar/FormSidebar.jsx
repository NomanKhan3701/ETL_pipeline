import React, { useEffect, useState } from "react";
import "./FormSidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import FormDropdown from "../Dropdown/FormDropdown/FormDropdown";
import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import FileInput from "../FileInput/FileInput";
import * as actions from "@/store/actions";
import {
  BATCH,
  SINK_NODE,
  STREAM,
  methodOption,
  typeOptions,
} from "@/shared/constants";
import { IoClose } from "react-icons/io5";

const FormSidebar = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.main.form);
  const nodes = useSelector((state) => state.main.nodes);
  const currentNode = nodes.find((node) => node.id == formData.id)?.data;

  const handleChange = (data) => {
    // const { sourceType, path, method } = data;
    if (nodes.length > 0 && formData.id && formData.show == true) {
      dispatch(actions.handleNodeValueChange(formData.id, data, formData.type));
    }
  };

  const closeForm = () => {
    dispatch(actions.clearForm());
  };

  return (
    <div className={`Form_sidebar ${formData.show ? "show" : ""}`}>
      <div className="cross" onClick={closeForm}>
        <IoClose />
      </div>
      <div className="header">Edit your source</div>
      {formData.id && (
        <div className="form_container">
          {/* <div className="form_item">
            <label>Processing type</label>

            <div className="radios_container">
              <div
                className={`radio_item ${
                  currentNode?.sourceType == STREAM ? "active" : ""
                }`}
                onClick={() => {
                  handleChange({
                    sourceType: STREAM,
                    value: "",
                  });
                }}
              >
                Stream
              </div>
              <div
                className={`radio_item ${
                  currentNode?.sourceType == BATCH ? "active" : ""
                }`}
                onClick={() => {
                  handleChange({
                    sourceType: BATCH,
                    value: "",
                  });
                }}
              >
                Batch
              </div>
            </div>
            <div className="radios_container"></div>
          </div> */}
          <div className="form_item">
            <label>Method</label>
            <FormDropdown
              placeholder={"Select a type"}
              data={
                currentNode?.sourceType == STREAM ? methodOption : typeOptions
              }
              value={currentNode?.method}
              setValue={(value) => {
                handleChange({
                  method: value,
                });
              }}
            />
          </div>
          <div className="form_item">
            <label>Path</label>
            <input
              type="text"
              placeholder="Enter the path"
              value={currentNode?.path}
              onChange={(e) => {
                handleChange({
                  path: e.target.value,
                });
              }}
            />
          </div>
          <div className="form_item">
            <label>Sink</label>
            <FormDropdown
              placeholder={"Select a type"}
              data={nodes
                .filter(
                  (node) => node.type === SINK_NODE && node.data.path !== ""
                )
                .map((node) => {
                  return {
                    name: node.data.path,
                    value: node.id,
                  };
                })}
              value={currentNode?.sink}
              sendAll={true}
              setValue={(value) => {
                console.log(value);
                handleChange({
                  sink: value,
                });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSidebar;
