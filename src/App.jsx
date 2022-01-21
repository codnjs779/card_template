import Login from "./components/login/Login";
import styles from "./App.module.css";
function App({ authService }) {
    return (
        <div className={styles.app}>
            <Login authService={authService} />
        </div>
    );
}

export default App;
