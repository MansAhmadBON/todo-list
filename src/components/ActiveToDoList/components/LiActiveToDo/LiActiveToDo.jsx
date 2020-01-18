import React from "react";
import styles from './LiActiveToDo.module.css';
import {BtnDoneToDo, BtnEditToDo, BtnDeleteToDo} from './Component';

function LiActiveToDo(props) {
    return (
        <li id={props.id} className={styles.LiActiveToDo}>
            <span className={styles.activeToDoName}>{props.name}</span>
            <div className={styles.ctrlsToDo}>
                <BtnDoneToDo />
                <BtnEditToDo />
                <BtnDeleteToDo />
            </div>
        </li>
    )
}

export default LiActiveToDo;