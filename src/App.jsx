import Login from "./components/login/Login";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Maker from "./components/maker/Maker";

function App({ authService, FileInput, CardRepository }) {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} />} />
                <Route path="/maker" element={<Maker CardRepository={CardRepository} authService={authService} FileInput={FileInput} />} />
            </Routes>
        </div>
    );
}

export default App;
