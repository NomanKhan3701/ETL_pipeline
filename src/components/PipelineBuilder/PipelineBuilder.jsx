import React, { useCallback, useMemo, useState } from "react";
import "./PiplelineBuilder.scss";
import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
import SourceNode from "../Nodes/SourceNode/SourceNode";
import TransformNode from "../Nodes/TransformNode/TransformNode";
import SinkNode from "../Nodes/SinkNode/SinkNode";
import ReactFlow, { Background, Panel } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "sourceNode",
    position: { x: 100, y: 150 },
    data: { value: 123 },
  },
  {
    id: "2",
    type: "transformerNode",
    position: { x: 150, y: 250 },
    data: { label: "2" },
  },
  {
    id: "3",
    type: "sinkNode",
    position: { x: 100, y: 400 },
    data: { label: "3" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  {
    id: "el-3",
    source: "2",
    target: "3",
  },
];

const PipelineBuilder = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeTypes = useMemo(
    () => ({
      sourceNode: SourceNode,
      transformerNode: TransformNode,
      sinkNode: SinkNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addEdge = (connection, eds) => {
    eds.push({
      id: `e${connection.source}-${connection.target}`,
      source: connection.source,
      target: connection.target,
    });
    return eds;
  };

  // console.log(nodes);

  const applyNodeChanges = (changes, nds) => {
    console.log(changes);
    changes.forEach((change) => {
      if (change.type === "add") {
        nds.push(change.node);
      } else if (change.type === "delete") {
        const index = nds.findIndex((node) => node.id === change.node.id);
        nds.splice(index, 1);
      } else if (change.type === "update") {
        const index = nds.findIndex((node) => node.id === change.node.id);
        nds[index] = change.node;
      }
    });
    return nds;
  };

  const applyEdgeChanges = (changes, eds) => {
    changes.forEach((change) => {
      if (change.type === "add") {
        eds.push(change.edge);
      } else if (change.type === "delete") {
        const index = eds.findIndex((edge) => edge.id === change.edge.id);
        eds.splice(index, 1);
      }
    });
    return eds;
  };

  return (
    <div className="Pipleline_builder">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background color="#fff" variant={"dots"} />
      </ReactFlow>
    </div>
  );
};

export default PipelineBuilder;
