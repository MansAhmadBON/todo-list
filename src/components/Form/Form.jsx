import React from "react";
import styles from './Form.module.css';
import { TextField } from '@material-ui/core';
import {Input, TextArea, Button} from "./Components";

function Form(props) {
    const handleSubmit = e => e.preventDefault();

    return (
        <form onSubmit={e => handleSubmit(e)} className={styles.form}>
            <Input
                addCurrentToDoName={props.addCurrentToDoName}
                value={props.todoName}
            />
            <div className={styles.wrapTextArea}>
                <TextArea
                    addCurrentToDoDescr={props.addCurrentToDoDescr}
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