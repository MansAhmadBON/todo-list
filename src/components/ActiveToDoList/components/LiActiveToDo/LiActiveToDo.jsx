import React from "react";
import styles from './LiActiveToDo.module.css';
import {BtnDoneToDo, BtnEditToDo, BtnDeleteToDo} from './Component';

function LiActiveToDo(props) {
    const openModal = e => props.openModalWindow(props.id);

    return (
        <div className={styles.wrapperLiActiveToDo}>
            <li id={props.id} className={styles.LiActiveToDo} onClick={e => openModal(e)}>
                <span className={styles.activeToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo}>
                <BtnDoneToDo />
                <BtnEditToDo />
                <BtnDeleteToDo />
            </div>
        </div>
    )
}

export default LiActiveToDo;