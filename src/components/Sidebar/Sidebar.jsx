import React from "react";
import "./Sidebar.scss";
import { LuFileJson } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "@/store/actions";
import {
  SINK_NODE,
  SOURCE_NODE,
  TRANSFORM_NODE,
  nodeTypeData,
} from "@/shared/constants";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
  const nodes = useSelector((state) => state.main.nodes);
  const edges = useSelector((state) => state.main.edges);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.authLogout());
    navigate("/");
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="Sidebar">
      <div className="search">
        <input type="text" placeholder="Search component" />
      </div>
      <div className="Nodes_container">
        <div
          className="Node"
          draggable={true}
          onDragStart={(event) => onDragStart(event, SOURCE_NODE)}
        >
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Source </div>
        </div>
        <div
          className="Node"
          draggable={true}
          onDragStart={(event) => onDragStart(event, TRANSFORM_NODE)}
        >
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Transformer</div>
        </div>
        <div
          className="Node"
          draggable={true}
          onDragStart={(event) => onDragStart(event, SINK_NODE)}
        >
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Sink</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
