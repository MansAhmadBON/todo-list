import {REMOVE_TODO} from '../../constants';

function actionRemoveTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export default actionRemoveTodo;