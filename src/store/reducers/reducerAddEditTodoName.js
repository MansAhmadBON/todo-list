import {ADD_EDIT_TODO_NAME} from '../../constants';

const initialState = '';

function reducerAddEditTodoName(state= initialState, action) {
    if(action.type === ADD_EDIT_TODO_NAME){
        return action.payload
    } else {
        return state;
    }
}

export default reducerAddEditTodoName;