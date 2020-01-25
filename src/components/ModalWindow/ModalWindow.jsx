import React from "react";
import {ModalWindowContent} from './components'
import styles from './modalWindow.module.css'

function ModalWindow(props) {
    if(props.data.length > 0){

        const handleClicked = e => {
            if(e.target.className === styles.modalWindow){
                props.toCloseModalWindow()
            } else {
                return null
            }
        };

        return (
            <div className={styles.modalWindow} onClick={e => handleClicked(e)}>
                <ModalWindowContent text={props.data[0].descr}/>
            </div>
        )
    } else {
        return null;
    }
}

export default ModalWindow;