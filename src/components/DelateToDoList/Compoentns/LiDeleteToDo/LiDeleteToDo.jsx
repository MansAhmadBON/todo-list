import React from "react";
import styles from './LiDeleteToDo.module.css';
import {BtnRemoveToDo, BtnRestoreToDo} from './Components';

function LiDeleteToDo(props) {
    const openModal = e => props.openModalWindow(props.id);

    return (
        <div className={styles.wrapperLiDeleteToDo}>
            <li className={styles.LiDeleteToDo} id={props.id} onClick={e => openModal(e)}>
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