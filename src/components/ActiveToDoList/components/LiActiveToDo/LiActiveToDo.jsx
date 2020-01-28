import React from "react";
import styles from './LiActiveToDo.module.css';
import {BtnDoneToDo, BtnEditToDo, BtnDeleteToDo} from './Component';

function btnAction(str, ...actions) {
    let classesArr = str.split(' ');
    let btnName = classesArr[0];
    let idTodo = classesArr[1];

    let actionTodoDone = actions[0];
    let actionOpenEditForm = actions[1];
    let actionTodoDel = actions[2];


    switch (btnName) {
        case 'taskDone':
            actionTodoDone(Number(idTodo));
            return;
        case 'editTask':
            actionOpenEditForm(Number(idTodo));
            return;
        case 'deleteTask':
            actionTodoDel(Number(idTodo));
            return;
        default: return null;
    }
}

function LiActiveToDo(props) {
    const openModal = e => props.openModalWindow(props.id);

    const handleClicked = e => {
        if(e.target.className.baseVal){
            btnAction(e.target.parentNode.className, props.toDoDone, props.openEditForm, props.deleteTodo, props.preparationForEditToDo);
        } else if(e.target.className.baseVal === '') {
            btnAction(e.target.parentNode.parentNode.className, props.toDoDone, props.openEditForm, props.deleteTodo, props.preparationForEditToDo);
        } else {
            btnAction(e.target.className, props.toDoDone, props.openEditForm, props.deleteTodo, props.preparationForEditToDo);
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