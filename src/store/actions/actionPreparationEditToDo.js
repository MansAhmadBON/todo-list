import {PREPARATION_FOR_EDIT_TODO} from '../../constants';

function actionPreparationEditToDo(id) {
    return {
        type: PREPARATION_FOR_EDIT_TODO,
        payload: id
    }
}

export default actionPreparationEditToDo;