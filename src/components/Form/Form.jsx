import React from "react";
import styles from './Form.module.css';
import {Input, TextArea, Button} from "./Components";

function Form(props) {
    const handleSubmit = e => e.preventDefault();

    return (
        <form onSubmit={e => handleSubmit(e)} className={styles.form}>
            <label>ToDo Name:</label>
            <Input
                todoName={props.todoName}
                addCurrentToDoName={props.addCurrentToDoName}
            />
            <label>ToDo description:</label>
            <TextArea
                todoDescr={props.todoDescr}
                addCurrentToDoDescr={props.addCurrentToDoDescr}
            />
            <Button
                addNewTodo={props.addNewTodo}
                todoName={props.todoName}
                todoDescr={props.todoDescr}
                clearInputName={props.clearInputName}
                clearInputDescr={props.clearInputDescr}
            />
        </form>
    )
}

export default Form;