import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";
import Create from "../create/Create";
import ViewCard from "../viewCard/ViewCard";

function Maker({ authService }) {
    const [card, setCard] = useState([
        {
            id: 1,
            name: "chaewon1",
            company: "none",
            theme: "dark",
            title: "engineer",
            email: "codnjs779@naver.com",
            message: "hello ",
            fileName: "chch",
            fileURL: null,
        },
        {
            id: 2,
            name: "chaewon2",
            company: "none",
            theme: "light",
            title: "engineer",
            email: "codnjs779@naver.com",
            message: "hello ",
            fileName: "chch",
            fileURL: null,
        },
        {
            id: 3,
            name: "chaewon3",
            company: "none",
            theme: "colorful",
            title: "engineer",
            email: "codnjs779@naver.com",
            message: "hello ",
            fileName: "chch",
            fileURL: "null",
        },
    ]);
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                navigate("/");
            }
        });
    });
    return (
        <section className={styles.maker}>
            <div className={styles.header}>
                <Header onLogout={onLogout} />
            </div>
            <div className={styles.createAndPreview}>
                <Create card={card} />
                <ViewCard card={card} />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </section>
    );
}

export default Maker;
