import React from "react";
import styles from "./ViewCard.module.css";
import Card from "../card/Card";

function ViewCard({ card }) {
    console.log(card);
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
            {card.map((item) => (
                <Card item={item} />
            ))}
        </section>
    );
}

export default ViewCard;
