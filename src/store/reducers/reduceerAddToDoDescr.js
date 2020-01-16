import {ADD_TODO_DESCR, CLEAR_INPUT_DESCR} from '../../constants';

const initialState = '';

function reduceerAddToDoDescr(state = initialState, action) {
    if(action.type === ADD_TODO_DESCR){
        return action.payload;
    } else if(action.type === CLEAR_INPUT_DESCR){
        return '';
    } else {
        return state;
    }
};

export default reduceerAddToDoDescr;