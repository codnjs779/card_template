import React, { useState, useEffect, useCallback } from "react";
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
    // 렌더되어도 계속 동일한 데이터를 사용하고자 할 때 usecallback// prop변경, state변경등에 전혀 영향을 ㅂ안받고 한번 저장된 데이터를 계속 쓴다는 말
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);
    //항상 동일한 함수를 쓰지만 대신 authService가 변화가 있을 때는 제외야 ! 하는 조건을 넣어줘야함

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
