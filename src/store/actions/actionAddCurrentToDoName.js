import {ADD_TODO_NAME} from '../../constants';

function actionAddCurrentToDoName(newValue) {
    return {
        type: ADD_TODO_NAME,
        payload: newValue
    }
}

export default actionAddCurrentToDoName;