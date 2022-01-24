import React from "react";
import styles from "./Create.module.css";
import CardEdit_form from "../card/CardEdit_form";

function Create({ card }) {
    return (
        <section className={styles.create}>
            <h1 className={styles.title}>Card Create</h1>{" "}
            {card.map((item) => (
                <CardEdit_form item={item} />
            ))}
        </section>
    );
}

export default Create;
