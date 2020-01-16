import {ADD_TODO_NAME, CLEAR_INPUT_NAME} from '../../constants/index';

const initialState = '';

function reducerAddToDoName(state = initialState, action) {
    if(action.type === ADD_TODO_NAME){
        return action.payload;
    } else if(action.type === CLEAR_INPUT_NAME){
        return '';
    } else {
        return state;
    }
}

export default reducerAddToDoName;