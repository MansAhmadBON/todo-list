import React from "react";
import styles from './Input.module.css'
import { TextField } from '@material-ui/core';

function Input(props) {
    const handleChange = e => {
        props.addCurrentToDoName(e.target.value);
    };
    return (
        <TextField
            onChange={e => handleChange(e)}
            value={props.todoName}
            className={styles.todoNameInput}
            label="ToDo Name"
            variant="outlined"
            value={props.value}
        />
    )
}

export default Input;