import React from "react";
import styles from "./Create.module.css";
import CardEdit_form from "../card_edit/CardEdit_form";
import CardAddForm from "../card_add/CardAdd_form";

function Create({ card, createOrupdateCard, deleteCard }) {
    return (
        <section className={styles.create}>
            <h1 className={styles.title}>Card Create</h1>{" "}
            {Object.keys(card).map((key) => (
                <CardEdit_form key={key} deleteCard={deleteCard} item={card[key]} createOrupdateCard={createOrupdateCard} />
            ))}
            <CardAddForm createOrupdateCard={createOrupdateCard} />
        </section>
    );
}

export default Create;
