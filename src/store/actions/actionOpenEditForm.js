import {OPEN_EDIT_FORM} from '../../constants';

function actionOpenEditForm(id) {
    return {
        type: OPEN_EDIT_FORM,
        payload: id
    }
}

export default actionOpenEditForm;