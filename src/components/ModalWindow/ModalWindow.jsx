import React from "react";
import {ModalWindowContent} from './components'
import styles from './modalWindow.module.css'

function ModalWindow(props) {
    if(props.text.length > 0){
        const id = Date.now() + 5;

        const handleClicked = e => {
            if(Number(e.target.id) === id){
                props.toCloseModalWindow()
            } else {
                return null
            }
        };

        return (
            <div className={styles.modalWindow} onClick={e => handleClicked(e)} id={id}>
                <ModalWindowContent text={props.text[0].descr}/>
            </div>
        )
    } else {
        return null;
    }
}

export default ModalWindow;