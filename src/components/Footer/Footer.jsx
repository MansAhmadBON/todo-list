import React from "react";
import styles from './Footer.module.css';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>Active: {props.activeTodos.length}</p>
                <p>Done: {props.doneTodos.length}</p>
                <p>Delete: {props.deleteTodos.length}</p>
            </div>
        </footer>
    )
}

export default Footer;