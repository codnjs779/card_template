import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/authservice";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/imageUploader";
import Image_fileInput from "./components/image_fileInput/Image_fileInput";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => <Image_fileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
    <BrowserRouter>
        <App authService={authService} CardRepository={cardRepository} FileInput={FileInput} />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
