import React from "react";
import styles from './LiDeleteToDo.module.css';
import {BtnRemoveToDo, BtnRestoreToDo} from './Components';

function actionsBtns(str, ...actions) {
    let classesArr = str.split(' ');
    let btnName = classesArr[0];
    let idTodo = classesArr[1];

    let actionRemove = actions[0];
    let actionRestore = actions[1];

    if(btnName === 'removeTodo'){
        actionRemove(Number(idTodo));
    } else if(btnName === 'restoreTodo'){
        actionRestore(Number(idTodo));
    }
}

function LiDeleteToDo(props) {
    const openModal = e => props.openModalWindow(props.id);

    const btnClicked = e => {
        if(e.target.className.baseVal){
            let arrayClassName = e.target.className.baseVal.split(' ');
            let btnClassName = arrayClassName[1] + ' ' + arrayClassName[2];
            actionsBtns(btnClassName, props.removeTodo, props.restoreTodo);
        } else if(e.target.className.baseVal === '') {
            actionsBtns(e.target.parentNode.parentNode.className, props.removeTodo, props.restoreTodo);
        } else {
            actionsBtns(e.target.className, props.removeTodo, props.restoreTodo);
        }
    };

    return (
        <div className={styles.wrapperLiDeleteToDo}>
            <li className={styles.LiDeleteToDo} id={props.id} onClick={e => openModal(e)}>
                <span className={styles.deleteToDoName}>{props.name}</span>
            </li>
            <div className={styles.ctrlsToDo} onClick={e => btnClicked(e)}>
                <BtnRemoveToDo idTodo={props.id}/>
                <BtnRestoreToDo idTodo={props.id}/>
            </div>
        </div>
    )
}

export default LiDeleteToDo;