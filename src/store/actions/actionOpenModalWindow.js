import {OPEN_MODAL_WINDOW} from '../../constants';

function actionOpenModalWindow(id) {
    return {
        type: OPEN_MODAL_WINDOW,
        payload: id
    }
}

export default actionOpenModalWindow