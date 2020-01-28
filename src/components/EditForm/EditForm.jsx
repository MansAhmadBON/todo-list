import React from "react";
import styles from './EditForm.module.css';
import {Input, TextArea, Btn} from './components';

function EditForm(props) {
    return (
        <form className={styles.editForm}>
            <label>New name todo</label>
            <Input />
            <label>New description todo</label>
            <TextArea />
            <Btn />
        </form>
    )
}

export default EditForm;