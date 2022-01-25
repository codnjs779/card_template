import React from "react";
import styles from "./ViewCard.module.css";
import Card from "../card/Card";

function ViewCard({ card }) {
    console.log(card);
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
            <ul className={styles.cards}>
                {" "}
                {Object.keys(card).map((key) => (
                    <Card key={key} item={card[key]} />
                ))}
            </ul>
        </section>
    );
}

export default ViewCard;
