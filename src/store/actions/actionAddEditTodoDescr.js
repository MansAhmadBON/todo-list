import {ADD_EDIT_TODO_DESCR} from '../../constants';

function actionAddEditTodoDescr(newValue) {
    return {
        type: ADD_EDIT_TODO_DESCR,
        payload: newValue
    }
}

export default actionAddEditTodoDescr;