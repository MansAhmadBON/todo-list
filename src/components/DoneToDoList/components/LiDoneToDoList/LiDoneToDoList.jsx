import React from "react";
import styles from './LiDoneToDoList.module.css';
import {BtnRemoveToDo} from './Components';

function LiDoneToDoList(props) {
    return (
        <div className={styles.wrapperLiDoneToDoList}>
            <li className={styles.LiDoneToDoList} id={props.id}>
                <span className={styles.doneToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo}>
                <BtnRemoveToDo />
            </div>
        </div>
    )
}

export default LiDoneToDoList