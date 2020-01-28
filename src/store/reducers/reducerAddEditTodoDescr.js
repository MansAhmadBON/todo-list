import {ADD_EDIT_TODO_DESCR} from '../../constants';

const initialState = '';

function reducerAddEditTodoDescr(state = initialState, action) {
    if(action.type === ADD_EDIT_TODO_DESCR){
        return action.payload
    } else {
        return state
    }
}

export default reducerAddEditTodoDescr;