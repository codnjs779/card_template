import React, { useRef } from "react";
import Button from "../button/button";
import Image_fileInput from "../image_fileInput/Image_fileInput";
import styles from "./CardAdd_form.module.css";

function CardAddForm({ onAdd }) {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || "",
            company: companyRef.current.value || "",
            theme: themeRef.current.value || "",
            title: titleRef.current.value || "",
            email: emailRef.current.value || "",
            message: messageRef.current.value || "",
            fileName: "",
            fileURL: "",
        };
        formRef.current.reset();
        onAdd(card);
    };
    return (
        <form className={styles.form} ref={formRef}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" />
            <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message"></textarea>
            <div className={styles.fileInput}>
                <Image_fileInput />
            </div>
            <div className={styles.submitBtn}>
                {" "}
                <Button name="Add" onClick={onSubmit} />
            </div>
        </form>
    );
}

export default CardAddForm;
