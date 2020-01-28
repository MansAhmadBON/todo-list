import {ADD_EDIT_TODO_NAME} from '../../constants';

function actionAddEditTodoName(newValue) {
    return {
        type: ADD_EDIT_TODO_NAME,
        payload: newValue
    }
}

export default actionAddEditTodoName;