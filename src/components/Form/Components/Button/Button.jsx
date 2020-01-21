import React from "react";
import styles from './Button.module.css';

function Button(props) {
    if(props.todoName.length > 3){

        const addToDo = () => {
            const id = Date.now();

            const todo = {
                name: props.todoName,
                descr: props.todoDescr,
                id
            };

            props.addNewTodo(todo);
            props.clearInputName();
            props.clearInputDescr();
        };

        return (
            <button onClick={addToDo} className={styles.btnNewTodo}>Add ToDo</button>
        )
    } else {
        return <button disabled={true} className={styles.btnNewTodoDisabled}>Add ToDo</button>
    }
}

export default Button;