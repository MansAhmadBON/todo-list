import {combineReducers} from "redux";
import reducerStateToDo from './reducerStateToDo';
import reduceerAddToDoDescr from './reduceerAddToDoDescr';
import reducerAddToDoName from './reducerAddToDoName';
import reducerModalWindow from './reducerModalWindow';
import reducerOpenEditForm from "./reducerOpenEditForm";
import reducerAddEditTodoName from "./reducerAddEditTodoName";
import reducerAddEditTodoDescr from './reducerAddEditTodoDescr';


const newToDoData = combineReducers({
    addToDoDescr: reduceerAddToDoDescr,
    addToDoName: reducerAddToDoName
});

const editedTodo = combineReducers({
    addEditTodoName: reducerAddEditTodoName,
    addEditTodoDescr: reducerAddEditTodoDescr
});

export default combineReducers({
    newToDoData,
    editedTodo,
    stateToDos: reducerStateToDo,
    modalWindow: reducerModalWindow,
    editFormStatus: reducerOpenEditForm,
});