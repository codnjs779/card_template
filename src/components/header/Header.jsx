import React, { memo } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
const Header = memo(({ onLogout }) => {
    return (
        <header className={styles.header}>
            {onLogout && (
                <button className={styles.logout} onClick={onLogout}>
                    Logout
                </button>
            )}
            <div className={styles.contents}>
                <img className={styles.logo} src={logo} alt="logo"></img>
                <h1 className={styles.title}>Business Card Maker</h1>
            </div>
        </header>
    );
});

export default Header;
