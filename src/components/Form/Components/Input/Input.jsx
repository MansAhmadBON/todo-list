import React from "react";
import styles from './Input.module.css'

function Input(props) {
    const handleChange = e => {
        props.addCurrentToDoName(e.target.value);
    }
    return (
        <input
            onChange={e => handleChange(e)}
            value={props.todoName}
            className={styles.todoNameInput}
        />
    )
}

export default Input;