import React from "react";
import styles from './TextArea.module.css';

function TextArea({value, addEditTodoDescr}) {
    const addEditDescr = e => {
        addEditTodoDescr(e.target.value);
    };

    return (
        <textarea className={styles.textAreaEditForm} defaultValue={value} onChange={e => addEditDescr(e)}/>
    )
}

export default TextArea;