import {ADD_TODO_NAME} from '../../constants/index';

const initialState = '';

function reducerAddToDoName(state = initialState, action) {
    if(action.type === ADD_TODO_NAME){
        return action.payload;
    } else {
        return state;
    }
}

export default reducerAddToDoName;