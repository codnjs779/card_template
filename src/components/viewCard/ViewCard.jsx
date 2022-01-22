import React from "react";
import styles from "./ViewCard.module.css";
function ViewCard(props) {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
        </section>
    );
}

export default ViewCard;
