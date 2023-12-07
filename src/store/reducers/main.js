import * as actionTypes from "../constants/main";
import { updateObject } from "../../shared/utility";
import { BATCH, SINK_NODE, SOURCE_NODE, STREAM, TRANSFORM_NODE } from "@/shared/constants";

const initialState = {
    form: {
        show: false,
        type: null,
        id: null,
    },
    nodes: [
        {
            id: "1",
            type: SOURCE_NODE,
            position: { x: 100, y: 150 },
            data: {
                sourceType: BATCH,
                method: "",
                path: "",
            },
        },
        {
            id: "2",
            type: TRANSFORM_NODE,
            position: { x: 150, y: 250 },
            data: { method: "" },
        },
        {
            id: "3",
            type: SINK_NODE,
            position: { x: 100, y: 400 },
            data: { path: "abs" },
        },
    ],
    edges: [
        { id: "e1-2", source: "1", target: "2", animated: true },
        {
            id: "el-3",
            source: "2",
            target: "3",
            animated: true,
        },
    ],
    types: [
        {
            name: "Mongodb",
            image: '',
            keys: [
                {
                    name: 'host',
                    type: 'text'
                }
            ]
        }
    ]
}

const setFormSidebar = (state, action) => {
    return updateObject(state, {
        form: {
            show: action.data.show,
            type: action.data.type,
            id: action.data.id,
        }
    })
}

const clearForm = (state, action) => {
    return updateObject(state, {
        form: {
            ...state.form,
            show: false,
        }
    })
}

const setNodes = (state, action) => {
    return updateObject(state, {
        nodes: action.data
    })
}

const setEdges = (state, action) => {
    return updateObject(state, {
        edges: action.data
    })
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_SIDEBAR:
            return setFormSidebar(state, action);
        case actionTypes.SET_NODES:
            return setNodes(state, action);
        case actionTypes.SET_EDGES:
            return setEdges(state, action);
        case actionTypes.CLEAR_FORM:
            return clearForm(state, action);
        default:
            return state
    }
}

export default mainReducer

