import {OPEN_EDIT_FORM, CLOSE_EDIT_FORM} from "../../constants";

const initialState = {
    status: false,
    id: null
};

function reducerOpenEditForm(state = initialState, action) {
    if(action.type === OPEN_EDIT_FORM){
        return {
            status: true,
            id: action.payload
        };
    } else  if(action.type === CLOSE_EDIT_FORM){
        return {
            status: false,
            id: null
        };
    } else {
        return state;
    }
}

export default reducerOpenEditForm;