import React, { useState } from "react";
import "./TransformNode.scss";
import { Handle, Position } from "reactflow";
import { LuFileJson2 } from "react-icons/lu";
import Dropdown from "@/components/Dropdown/Dropdown";
import { TRANSFORM_NODE } from "@/shared/constants";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/store/actions";

const TransformNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const options = [
    { name: "To XML" },
    { name: "To JSON" },
    // { name: "To CSV" },
    // { name: "To YAML" },
    // { name: "To HTML" },
  ];
  
  return (
    <div className="Transformer_container" datatype={TRANSFORM_NODE}>
      <Handle type="target" position={Position.Top} />
      <div className="Transformer__node">
        <Dropdown
          placeholder={"Select a transformation"}
          value={data?.method}
          setValue={(value) => {
            dispatch(
              actions.handleNodeValueChange(id, {
                method: value,
              }, TRANSFORM_NODE)
            );
          }}
          data={options}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default TransformNode;
