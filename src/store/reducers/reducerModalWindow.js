import {OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW} from '../../constants';

const initialState = {
    id: null,
    status: false
};

function reducerModalWindow(state = initialState, action){
    console.log(action);
    if(action.type === OPEN_MODAL_WINDOW){
        return {
            id: action.payload,
            status: true
        }
    } else if(action.type === CLOSE_MODAL_WINDOW){
        return {
            id: null,
            status: false
        };
    } else {
        return state
    }
}

export default reducerModalWindow;