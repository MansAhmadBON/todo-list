import React from "react";

function Button(props) {

    const addToDo = () => {
        const id = Date.now();
        const todo = {
            name: props.todoName,
            descr: props.todoDescr,
            id
        }
        props.addNewTodo(todo);
        props.clearInputName();
        props.clearInputDescr();
    };


    return (
        <button onClick={addToDo}>Добавить задание:</button>
    )
}

export default Button;