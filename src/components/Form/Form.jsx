import React from "react";
import styles from './Form.module.css';
import { TextField } from '@material-ui/core';
import {Input, TextArea, Button} from "./Components";

function Form(props) {
    const handleSubmit = e => e.preventDefault();

    const addCurrentTodoName = e => {
        props.addCurrentToDoName(e.target.value);
    };

    const addCurrentDescrTodo = e => {
        props.addCurrentToDoDescr(e.target.value)
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className={styles.form}>
            <TextField
                label="ToDo Name"
                variant="outlined"
                className={styles.inputNameTodo}
                onChange={e => addCurrentTodoName(e)}
                value={props.todoName}
            />
            <div className={styles.wrapTextArea}>
                <TextField
                    label="ToDo description"
                    variant="outlined"
                    className={styles.textAreaDescrTodo}
                    multiline={true}
                    rows={4}
                    rowsMax={4}
                    onChange={e => addCurrentDescrTodo(e)}
                    value={props.todoDescr}
                />
            </div>
            <div className={styles.wrapBtn}>
                <Button
                    addNewTodo={props.addNewTodo}
                    todoName={props.todoName}
                    todoDescr={props.todoDescr}
                    clearInputName={props.clearInputName}
                    clearInputDescr={props.clearInputDescr}
                />
            </div>
        </form>
    )
}

export default Form;