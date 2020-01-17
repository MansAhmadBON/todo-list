import React from "react";
import styles from './TextArea.module.css'

function TextArea(props) {
    const handleChange = e => {
        props.addCurrentToDoDescr(e.target.value);
    }
    return (
        <textarea
            onChange={e => handleChange(e)}
            value={props.todoDescr}
            className={styles.ToDoDescrTextArea}
        />
    )
}

export default TextArea;