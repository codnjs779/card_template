import React from "react";
import styles from "./Create.module.css";
import CardEdit_form from "../card_edit/CardEdit_form";
import CardAddForm from "../care_add/CardAdd_form";

function Create({ card, addCard }) {
    return (
        <section className={styles.create}>
            <h1 className={styles.title}>Card Create</h1>{" "}
            {card.map((item) => (
                <CardEdit_form key={card.id} item={item} />
            ))}
            <CardAddForm onAdd={addCard} />
        </section>
    );
}

export default Create;
