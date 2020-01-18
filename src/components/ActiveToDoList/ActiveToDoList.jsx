import React from 'react';
import styles from './ActiveToDoList.module.css'
import {LiActiveToDo} from './components/index'

function ActiveToDoList(props) {
    return (
        <ul className={styles.ActiveToDoList}>
            {
                props.activeTodos.map(item => {
                    return <LiActiveToDo key={item.id} name={item.name} id={item.id} openModalWindow={props.openModalWindow}/>
                })
            }
        </ul>
    )
}

export default ActiveToDoList;