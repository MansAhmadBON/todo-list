import React from "react";
import styles from './Btn.module.css';

function Btn({modifiedTodo, setEditTodo, closeEditForm, todo}) {
    const addEditToDo = e => {

        if(modifiedTodo.name === ''){
            let newTodo = {
                name: todo.name,
                descr: modifiedTodo.descr,
                id: modifiedTodo.id
            };
            setEditTodo(newTodo);
        } else {
            setEditTodo(modifiedTodo)
        }
        closeEditForm();
    };

    return (
        <button className={styles.btnEditForm} onClick={addEditToDo}>accept changes</button>
    )
}

export default Btn;