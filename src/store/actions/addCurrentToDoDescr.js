import {ADD_TODO_DESCR} from '../../constants';

function actionAddCurrentToDoDescr(newValue) {
    return {
        type: ADD_TODO_DESCR,
        payload: newValue
    }
}

export default actionAddCurrentToDoDescr;