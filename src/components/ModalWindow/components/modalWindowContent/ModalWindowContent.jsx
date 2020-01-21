import React from "react";
import styles from './modalWindowContent.module.css';

function modalWindowContent(props) {
    console.log('text', props.text.length);
    if(props.text.length > 0){
        return (
            <div className={styles.modalWindowContent}>
                <p>{props.text}</p>
            </div>
        )
    } else {
        return (
            <div className={styles.modalWindowContent}>
                <p className={styles.messageNoTaskDescription}>No task description!</p>
            </div>
        )
    }
}

export default modalWindowContent;