import {ADD_NEW_TODO} from '../../constants';

function actionAddNewTodo(newToDo) {
    return {
        type: ADD_NEW_TODO,
        payload: newToDo
    }
}

export default actionAddNewTodo;