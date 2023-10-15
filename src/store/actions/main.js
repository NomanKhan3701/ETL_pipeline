import * as actionTypes from "../constants/main";

export const setFormSidebar = (data) => {
    return {
        type: actionTypes.SET_FORM_SIDEBAR,
        show: data.show,
        type: data.type,
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
