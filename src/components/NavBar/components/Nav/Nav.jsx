import React from "react";
import styles from './Nav.module.css';
import {ToActive, ToCompleted, ToDelete, ToHome} from './components';

function Nav() {
    return (
        <div className={styles.nav}>
            <ToActive />
            <ToCompleted />
            <ToDelete />
            <ToHome />
        </div>
    )
}

export default Nav;