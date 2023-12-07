import { SINK_NODE, SOURCE_NODE, TRANSFORM_NODE } from "@/shared/constants";
import * as actionTypes from "../constants/main";

export const setFormSidebar = (data) => {
    return {
        type: actionTypes.SET_FORM_SIDEBAR,
        data: data,
    }
}

export const setNodes = (data) => {
    return {
        type: actionTypes.SET_NODES,
        data: data,
    }
}

export const setEdges = (data) => {
    return {
        type: actionTypes.SET_EDGES,
        data: data,
    }
}

export const clearForm = () => {
    return {
        type: actionTypes.CLEAR_FORM,
    }
}

export const handleNodeValueChange = (nodeId, data, nodeType) => {
    // const { sourceType, path, method } = data;
    return (dispatch, getState) => {
        const nodes = getState().main.nodes;
        const formData = getState().main.form;
        const node_type = nodeType ? nodeType : formData.type;
        const index = nodes.findIndex((node) => node.id === nodeId);

        if (index != -1) {
            const newNodes = [...nodes];
            if (node_type === SOURCE_NODE) {
                const { sourceType, path, method } = data;
                const newNode = {
                    ...newNodes[index],
                    data: {
                        ...newNodes[index].data,
                        sourceType: sourceType
                            ? sourceType
                            : newNodes[index].data.sourceType,
                        method:
                            sourceType && newNodes[index].data.sourceType !== sourceType
                                ? ""
                                : method
                                    ? method
                                    : newNodes[index].data.method,
                        path: path || path == "" ? path : newNodes[index].data.path,
                        sink: data.sink ? data.sink : newNodes[index].data.sink,
                    },
                };
                newNodes[index] = newNode;
                dispatch(setNodes(newNodes));
            }
            else if (node_type === TRANSFORM_NODE) {
                const { method } = data;
                const newNode = {
                    ...newNodes[index],
                    data: {
                        ...newNodes[index].data,
                        method: method ? method : newNodes[index].data.method,
                    },
                };
                newNodes[index] = newNode;
                dispatch(setNodes(newNodes));
            }
            else if (node_type === SINK_NODE) {
                const { path } = data;
                const newNode = {
                    ...newNodes[index],
                    data: {
                        ...newNodes[index].data,
                        path: path ? path : newNodes[index].data.path,
                    },
                };
                newNodes[index] = newNode;
                dispatch(setNodes(newNodes));
            }
        }
    }
}