import React from "react";
import styles from './DelateToDoList.module.css';
import {LiDeleteToDo} from "./Compoentns";

function DelateToDoList(props) {
    return (
        <div className={styles.DeleteToDoList}>
            <div>
                <h2 className={styles.titleSection}>Delated Todos</h2>
            </div>
            <ul>
                {
                    props.deleteTodos.map(todo => {
                        return <LiDeleteToDo key={todo.id} name={todo.name} id={todo.id} openModalWindow={props.openModalWindow} removeTodo={props.removeTodo} restoreTodo={props.restoreTodo}/>
                    })
                }
            </ul>
        </div>
    )
}

export default DelateToDoList;