import React from "react";
import styles from './DoneToDoList.module.css';
import {LiDoneToDoList} from "./components";

const DoneToDoList = React.memo(function DoneToDoList(props) {
    return (
        <div className={styles.DoneToDoList}>
            <h2 className={styles.titleSection}>Completed Todos</h2>
            <ul>
                {
                    props.doneTodos.map(todo => {
                        return <LiDoneToDoList key={todo.id} id={todo.id} name={todo.name} openModalWindow={props.openModalWindow} removeTodo={props.removeTodo}/>
                    })
                }
            </ul>
        </div>
    )

});

export default DoneToDoList;