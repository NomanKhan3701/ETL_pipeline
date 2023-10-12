import * as actionTypes from "../constants/main";
import { updateObject } from "../../shared/utility";

const initialState = {
    form: {
        show: true,
        type: null,
    }
}

const setFormSidebar = (state, action) => {
    return updateObject(state, {
        form: {
            ...state.form,
            show: action.show,
            type: action.type
        }
    })
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_SIDEBAR:
            return setFormSidebar(state, action);
        default:
            return state
    }
}

export default mainReducer

