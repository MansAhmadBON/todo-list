import React from "react";
import {ModalWindowContent} from './components'
import styles from './modalWindow.module.css'

function ModalWindow(props) {
    const id = Date.now() + 5;
    const handleClicked = e => {
        if(Number(e.target.id) === id){
            props.toCloseModalWindow()
        } else {
            return null
        }
    }
    return (
        <div className={styles.modalWindow} onClick={e => handleClicked(e)} id={id}>
            <ModalWindowContent text={props.text}/>
        </div>
    )
}

export default ModalWindow;