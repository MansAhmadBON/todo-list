import React from "react";
import styles from './modalWindowContent.module.css';

function modalWindowContent(props) {
    return (
        <div className={styles.modalWindowContent}>
            <p>{props.text}</p>
        </div>
    )
}

export default modalWindowContent;