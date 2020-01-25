import React from "react";
import styles from './LiDoneToDoList.module.css';
import {BtnRemoveToDo} from './Components';

function LiDoneToDoList(props) {
    const openModal = e => props.openModalWindow(props.id);

    return (
        <div className={styles.wrapperLiDoneToDoList}>
            <li className={styles.LiDoneToDoList} id={props.id} onClick={e => openModal(e)}>
                <span className={styles.doneToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo}>
                <BtnRemoveToDo />
            </div>
        </div>
    )
}

export default LiDoneToDoList