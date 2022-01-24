import React from "react";
import Button from "../button/button";
import Image_fileInput from "../image_fileInput/Image_fileInput";
import styles from "./CardEdit_form.module.css";

function CardEdit_form({ item }) {
    const { name, company, title, email, message, theme, fileName, fileURL } = item;
    const onSubmit = () => {};
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} />
            <input className={styles.input} type="text" name="email" value={email} />
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <Image_fileInput />
            </div>
            <div className={styles.submitBtn}>
                {" "}
                <Button name="Delete" onClick={onSubmit} />
            </div>
        </form>
    );
}

export default CardEdit_form;