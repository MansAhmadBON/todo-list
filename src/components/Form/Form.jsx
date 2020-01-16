import React from "react";
import {Input, TextArea, Button} from "./Components";

function Form(props) {
    const handleSubmit = e => e.preventDefault();

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>Название задания:</label>
            <Input
                todoName={props.todoName}
                addCurrentToDoName={props.addCurrentToDoName}
            />
            <label>Описание задания:</label>
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