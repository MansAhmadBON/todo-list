import React from "react";
import styles from './Nav.module.css';
import {ToActive, ToCompleted, ToDelete} from './components';

function Nav() {
    return (
        <div className={styles.nav}>
            <ToActive />
            <ToCompleted />
            <ToDelete />
        </div>
    )
}

export default Nav;