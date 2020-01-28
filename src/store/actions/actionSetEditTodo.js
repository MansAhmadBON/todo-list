import {SET_EDIT_TODO} from '../../constants';

function actionSetEditTodo(todo) {
    return {
        type: SET_EDIT_TODO,
        payload: todo
    }
}

export default actionSetEditTodo;