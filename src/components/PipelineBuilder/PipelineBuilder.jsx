import React, { useCallback, useMemo, useRef, useState } from "react";
import "./PiplelineBuilder.scss";
import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
import SourceNode from "../Nodes/SourceNode/SourceNode";
import TransformNode from "../Nodes/TransformNode/TransformNode";
import SinkNode from "../Nodes/SinkNode/SinkNode";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  Panel,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  SINK_NODE,
  SOURCE_NODE,
  TRANSFORM_NODE,
  nodeTypeData,
} from "@/shared/constants";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/store/actions";
import { v4 as uuidv4 } from "uuid";

const PipelineBuilder = () => {
  const reactFlowWrapper = useRef(null);
  const nodes = useSelector((state) => state.main.nodes);
  const edges = useSelector((state) => state.main.edges);
  const dispatch = useDispatch();
  const nodeTypes = useMemo(
    () => ({
      [SOURCE_NODE]: SourceNode,
      [TRANSFORM_NODE]: TransformNode,
      [SINK_NODE]: SinkNode,
    }),
    []
  );
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onNodesChange = (changes) => {
    const newNodes = applyNodeChanges(changes, nodes);
    dispatch(actions.setNodes(newNodes));
  };

  const onEdgesChange = (changes) => {
    const newEdges = applyEdgeChanges(changes, edges);
    dispatch(actions.setEdges(newEdges));
  };

  const onConnect = (changes) => {
    const newEdge = {
      id: uuidv4(),
      source: changes.source,
      target: changes.target,
      animated: true,
    };
    dispatch(actions.setEdges([...edges, newEdge]));
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");

    // check if the dropped element is valid
    if (typeof type === "undefined" || !type) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: uuidv4(),
      type: type,
      position,
      data: nodeTypeData[type].data,
    };
    dispatch(actions.setNodes([...nodes, newNode]));
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <ReactFlowProvider>
      <div className="Pipleline_builder" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onInit={setReactFlowInstance}
          onDrop={handleDrop}
          onDragOver={onDragOver}
        >
          <Background color="#fff" variant={"dots"} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default PipelineBuilder;
