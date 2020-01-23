import {TODO_DELETE} from '../../constants';

function actionDeleteTodo(id) {
    return {
        type: TODO_DELETE,
        payload: id
    }
}

export default actionDeleteTodo;