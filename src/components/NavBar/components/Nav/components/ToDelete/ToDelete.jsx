import React from "react";
import {NavLink} from "react-router-dom";
import styles from './ToDelete.module.css'

function ToDelete() {
    return (
        <NavLink to="/delete" className={styles.link} activeClassName={styles.active}>Delete</NavLink>
    )
}

export default ToDelete;