import {ADD_NEW_TODO} from '../../constants';

const initialState = {
    activeToDo: [],
    doneToDo: [],
    deletedToDo: []
};

function reducerStateToDo(state = initialState, action) {
    //console.log(action)
    if(action.type === ADD_NEW_TODO){
        return {
            ...state,
            activeToDo: [...state.activeToDo, action.payload]
        }
    } else {
        return state
    }
}

export default reducerStateToDo;
