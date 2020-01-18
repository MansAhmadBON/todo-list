import {combineReducers} from "redux";
import reducerStateToDo from './reducerStateToDo';
import reduceerAddToDoDescr from './reduceerAddToDoDescr';
import reducerAddToDoName from './reducerAddToDoName';
import reducerOpenModalWindow from './reducerOpenModalWindow';

const newToDoData = combineReducers({
    addToDoDescr: reduceerAddToDoDescr,
    addToDoName: reducerAddToDoName
})

export default combineReducers({
    newToDoData,
    stateToDos: reducerStateToDo,
    modalWindow: reducerOpenModalWindow
});