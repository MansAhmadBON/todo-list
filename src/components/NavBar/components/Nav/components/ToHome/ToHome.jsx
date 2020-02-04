import React from "react";
import {NavLink} from "react-router-dom";
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import styles from './ToHome.module.css';

function ToHome() {
    return (
        <NavLink to="/" className={styles.link} activeClassName={styles.active}>
            Close
        </NavLink>
    )
}

export default ToHome;