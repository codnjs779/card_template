import React, { useRef } from "react";
import Button from "../button/button";

import styles from "./CardEdit_form.module.css";

function CardEdit_form({ item, createOrupdateCard, deleteCard, FileInput }) {
    const { name, company, title, email, message, theme, fileName, fileURL } = item;
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onFileChange = (file) => {
        createOrupdateCard({
            ...item,
            fileName: file.name,
            fileURL: file.url,
        });
    };
    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        createOrupdateCard({ ...item, [event.currentTarget.name]: event.currentTarget.value });
    };
    const onSubmit = (e) => {
        deleteCard(item);
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange} />
            <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
            <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
            <input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange} />
            <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>

            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <div className={styles.submitBtn}>
                {" "}
                <Button name="Delete" onClick={onSubmit} />
            </div>
        </form>
    );
}

export default CardEdit_form;
