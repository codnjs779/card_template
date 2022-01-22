import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Maker.module.css";
import { useNavigate } from "react-router-dom";

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
            <Header onLogout={onLogout} />
            가우누데에에
            <Footer />
        </section>
    );
}

export default Maker;
