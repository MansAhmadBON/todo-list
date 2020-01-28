import React from "react";
import styles from './EditForm.module.css';
import {Input, TextArea, Btn} from './components';

function EditForm(props) {
    const handleSubmit = e => e.preventDefault();

    const filteredTodos = props.activeTodos.filter(todo => todo.id === props.idTodo);
    const todo = filteredTodos[0];

    const newTodo = {
        name: props.editedTodo.addEditTodoName,
        descr: props.editedTodo.addEditTodoDescr,
        id: todo.id
    };

    return (
        <form className={styles.editForm} onSubmit={e => handleSubmit(e)}>
            <label>New name todo</label>
            <Input value={todo.name} addEditTodoName={props.addEditTodoName}/>
            <label>New description todo</label>
            <TextArea value={todo.descr} addEditTodoDescr={props.addEditTodoDescr}/>
            <Btn modifiedTodo={newTodo} todo={todo} setEditTodo={props.setEditTodo} closeEditForm={props.closeEditForm}/>
        </form>
    )
}

export default EditForm;