import {TODO_EDIT} from '../../constants';

function actionEditToDo(id) {
    return {
        type: TODO_EDIT,
        payload: id
    }
}

export default actionEditToDo;