import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Maker.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Create from "../create/Create";
import ViewCard from "../viewCard/ViewCard";

function Maker({ authService, FileInput, CardRepository }) {
    const location = useLocation();
    const locationState = location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(locationState && locationState.id);

    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = CardRepository.syncCards(userId, (cards) => {
            setCards(cards);
        });
        // 언마운트 된 부분
        return () => {
            stopSync();
        };
    }, [userId, CardRepository]);

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                navigate("/");
            }
        });
    }, [userId, navigate, authService]);

    const createOrupdateCard = (item) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[item.id] = item;
            return updated;
        });
        CardRepository.saveCard(userId, item);
    };

    const deleteCard = (item) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[item.id];
            return updated;
        });
        CardRepository.removeCard(userId, item);
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
