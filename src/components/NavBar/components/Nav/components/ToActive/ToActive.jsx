import React from "react";
import {NavLink} from "react-router-dom";
import styles from './ToActive.module.css'

function ToActive() {
    return (
        <NavLink to="/active" className={styles.link} activeClassName={styles.active}>Active</NavLink>
    )
}

export default ToActive;