import React from "react";
import "./SourceNode.scss";
import { Handle, Position } from "reactflow";
import { LuFileJson2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import * as actions from "@/store/actions";

const SourceNode = () => {
  const dispatch = useDispatch();
  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div
      className="Source_container"
      onClick={() => {
        dispatch(
          actions.setFormSidebar({
            show: true,
            type: "source",
          })
        );
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="Source__node">
        <div className="image">
          <LuFileJson2 />
        </div>
        <div className="input">
          <div className="file_name">Example.json</div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SourceNode;
