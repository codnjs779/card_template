import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/authservice";
import { BrowserRouter } from "react-router-dom";

const authService = new AuthService();

ReactDOM.render(
    <BrowserRouter>
        <App authService={authService} />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
