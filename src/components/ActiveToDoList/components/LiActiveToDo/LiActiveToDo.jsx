import React from "react";
import styles from './LiActiveToDo.module.css';
import {BtnDoneToDo, BtnEditToDo, BtnDeleteToDo} from './Component';

function btnAction(str) {
    let classesArr = str.split(' ');
    let btnName = classesArr[0];
    let idTodo = classesArr[1];
    switch (btnName) {
        case 'taskDone':
            console.log({type: 'TASK_DONE', payload: idTodo});
            return;
        case 'editTask':
            console.log({type: 'TASK_EDIT', payload: idTodo});
            return;
        case 'deleteTask':
            console.log({type: 'TASK_DELATE', payload: idTodo});
            return;
        default: return null;
    }
}

function LiActiveToDo(props) {
    const openModal = e => props.openModalWindow(props.id);

    const handleClicked = e => {
        if(e.target.className.baseVal){
            btnAction(e.target.parentNode.className)
        } else if(e.target.className.baseVal === '') {
            btnAction(e.target.parentNode.parentNode.className)
        } else {
            btnAction(e.target.className)
        }

    };

    return (
        <div className={styles.wrapperLiActiveToDo}>
            <li id={props.id} className={styles.LiActiveToDo} onClick={e => openModal(e)}>
                <span className={styles.activeToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo} onClick={e => handleClicked(e)}>
                <BtnDoneToDo idTodo={props.id}/>
                <BtnEditToDo idTodo={props.id}/>
                <BtnDeleteToDo idTodo={props.id}/>
            </div>
        </div>
    )
}

export default LiActiveToDo;