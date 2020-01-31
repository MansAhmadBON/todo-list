import React from "react";
import styles from './NavBar.module.css';
import {Nav} from './components';

function NavBar() {
    return (
        <div className={styles.navBar}>
            <Nav />
        </div>
    )
}

export default NavBar;