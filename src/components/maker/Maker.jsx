import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";
import Create from "../create/Create";
import ViewCard from "../viewCard/ViewCard";

function Maker({ authService, FileInput }) {
    const [cards, setCards] = useState({
        1: {
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
        2: {
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
        3: {
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
    });

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

    const createOrupdateCard = (item) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[item.id] = item;
            return updated;
        });
    };

    const deleteCard = (item) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[item.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <div className={styles.header}>
                <Header onLogout={onLogout} />
            </div>
            <div className={styles.createAndPreview}>
                <Create card={cards} createOrupdateCard={createOrupdateCard} deleteCard={deleteCard} FileInput={FileInput} />
                <ViewCard card={cards} />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </section>
    );
}

export default Maker;
