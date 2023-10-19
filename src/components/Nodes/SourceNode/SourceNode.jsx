import React from "react";
import "./SourceNode.scss";
import { Handle, Position } from "reactflow";
import { LuFileJson2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/store/actions";
import { SOURCE_NODE, methodOption, typeOptions } from "@/shared/constants";

const SourceNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const currentMethod = methodOption.find((item) => {
    return item.name == data.method;
  });

  return (
    <div
      className="Source_container"
      datatype={SOURCE_NODE}
      onClick={() => {
        dispatch(
          actions.setFormSidebar({
            show: true,
            type: SOURCE_NODE,
            id: id,
          })
        );
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="Source__node">
        <div className="image">
          {currentMethod?.Icon ? (
            <currentMethod.Icon color={currentMethod?.color} />
          ) : (
            <LuFileJson2 />
          )}
        </div>
        <div className="input">
          <div className="file_name">
            {data.path
              ? data.path
              : data.method
              ? "Enter a path"
              : "Select a source"}
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SourceNode;
