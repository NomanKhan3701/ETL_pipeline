import * as actionTypes from "../constants/main";

export const setFormSidebar = (data) => {
    return {
        type: actionTypes.SET_FORM_SIDEBAR,
        show: data.show,
        type: data.type,
    }
}