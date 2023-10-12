import React from "react";
import "./SinkNode.scss";
import { Handle, Position } from "reactflow";
import { BsFiletypeXml } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const SinkNode = () => {
  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="Sink_container">
      <Handle type="target" position={Position.Top} />
      <div className="Sink__node">
        <div className="image">
          <BsFiletypeXml />
        </div>
        <div className="btn_wrapper">
          <div className="primary_btn">
            {" "}
            <AiOutlineDownload />
            <div className="txt">Download</div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SinkNode;
