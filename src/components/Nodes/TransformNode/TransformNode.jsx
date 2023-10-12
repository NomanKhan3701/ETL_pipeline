import React, { useState } from "react";
import "./TransformNode.scss";
import { Handle, Position } from "reactflow";
import { LuFileJson2 } from "react-icons/lu";
import Dropdown from "@/components/Dropdown/Dropdown";

const TransformNode = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    console.log(event.target.value);
  };

  const options = [
    { name: "To XML" },
    { name: "To JSON" },
    // { name: "To CSV" },
    // { name: "To YAML" },
    // { name: "To HTML" },
  ];

  return (
    <div className="Transformer_container">
      <Handle type="target" position={Position.Top} />
      <div className="Transformer__node">
        <Dropdown
          placeholder={"Select a transformation"}
          value={value}
          setValue={setValue}
          data={options}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default TransformNode;
