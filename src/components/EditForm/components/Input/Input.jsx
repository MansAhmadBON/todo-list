import React from "react";
import styles from './Input.module.css';

function Input({value, addEditTodoName}) {
    const addEditName = e => {
        addEditTodoName(e.target.value);
    };
    return (
        <input className={styles.inpEditForm} defaultValue={value} onChange={e => addEditName(e)}/>
    )
}

export default Input;