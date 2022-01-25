import React, { memo } from "react";
import styles from "./Card.module.css";
import test from "../../images/defaultLogo.png";
// const DEFAULT_IMAGE = "../../images/defaultLogo.png";
const Card = memo(({ item }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } = item;

    const url = fileURL || test;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img src={url} className={styles.avatar} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
});
function getStyles(theme) {
    switch (theme) {
        case "dark":
            return styles.dark;
        case "light":
            return styles.light;
        case "colorful":
            return styles.colorful;
        default:
            throw new Error(`unkown - ${theme}`);
    }
}

export default Card;
