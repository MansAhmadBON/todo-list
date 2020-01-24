import React from "react";
import styles from './LiDeleteToDo.module.css';
import {BtnRemoveToDo, BtnRestoreToDo} from './Components';

function LiDeleteToDo(props) {
    return (
        <div className={styles.wrapperLiDeleteToDo}>
            <li className={styles.LiDeleteToDo} id={props.id}>
                <span className={styles.deleteToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo}>
                <BtnRemoveToDo />
                <BtnRestoreToDo />
            </div>
        </div>
    )
}

export default LiDeleteToDo;