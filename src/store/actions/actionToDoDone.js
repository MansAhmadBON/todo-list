import {TODO_DONE} from '../../constants';

function actionToDoDone(id) {
    return {
        type: TODO_DONE,
        payload: id
    }
}

export default actionToDoDone;