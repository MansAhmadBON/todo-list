import React from "react";
import styles from './TextArea.module.css'
import {TextField} from "@material-ui/core";

function TextArea(props) {
    const handleChange = e => {
        props.addCurrentToDoDescr(e.target.value);
    };
    return (
        <TextField
            label="ToDo description"
            variant="outlined"
            className={styles.ToDoDescrTextArea}
            multiline={true}
            rows={4}
            rowsMax={4}
            onChange={e => handleChange(e)}
            value={props.value}
        />
    )
}

export default TextArea;