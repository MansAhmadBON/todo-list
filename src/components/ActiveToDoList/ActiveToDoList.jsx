import React from 'react';
import styles from './ActiveToDoList.module.css'
import {LiActiveToDo} from './components/index'

function ActiveToDoList(props) {
    return (
        <div className={styles.ActiveToDoList}>
            <h2 className={styles.titleSection}>Active Todos</h2>
            <ul>
                {
                    props.activeTodos.map(item => {
                        return <LiActiveToDo key={item.id} name={item.name} id={item.id} openModalWindow={props.openModalWindow} toDoDone={props.toDoDone} openEditForm={props.openEditForm} deleteTodo={props.deleteTodo} />
                    })
                }
            </ul>
        </div>
    )
}

export default ActiveToDoList;