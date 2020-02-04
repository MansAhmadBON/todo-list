import React from "react";
import styles from './ToCompleted.module.css'
import {NavLink} from "react-router-dom";

function ToCompleted() {
    return (
        <NavLink to="/completed" className={styles.link} activeClassName={styles.active}>Completed</NavLink>
    )
}

export default ToCompleted;