import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login({ authService }) {
    const navigate = useNavigate();

    const goToMaker = (userId) => {
        navigate({
            pathname: "/maker",
            state: { id: userId },
        });
    };

    const onLogin = (event) => {
        authService //
            .login(event.currentTarget.textContent)
            .then((data) => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            user && goToMaker(user.uid);
        });
    });
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
}

export default Login;
