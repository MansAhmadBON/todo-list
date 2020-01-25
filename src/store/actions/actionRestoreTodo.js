import {RESTORE_TODO} from '../../constants';

function actionRestoreTodo(id) {
    return {
        type: RESTORE_TODO,
        payload: id
    }
}

export default actionRestoreTodo;