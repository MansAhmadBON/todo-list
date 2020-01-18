import {OPEN_MODAL_WINDOW} from '../../constants';

const initialState = {
    id: null,
    status: false
};

function reducerOpenModalWindow(state = initialState, action){
    if(action.type === OPEN_MODAL_WINDOW){
        return {
            id: action.payload,
            status: true
        }
    } else {
        return state;
    }
}

export default reducerOpenModalWindow;