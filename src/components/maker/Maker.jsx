import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";
import Create from "../create/Create";
import ViewCard from "../viewCard/ViewCard";

function Maker({ authService }) {
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
                <Create />
                <ViewCard />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </section>
    );
}

export default Maker;
