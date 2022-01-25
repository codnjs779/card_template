import React, { useRef } from "react";

import styles from "../image_fileInput/Image_fileInput.module.css";
// 이미지 이름, 파일 바뀌면 불러줄 수 있는 콜백 필요
function Image_fileInput({ imageUploader, name, onFileChange }) {
    const inputRef = useRef();
    const onButtonClick = (e) => {
        // inpput 클릭시 페이지 업로드 되는 것 방지
        e.preventDefault();
        inputRef.current.click();
    };
    const onChange = async (e) => {
        const uploaded = await imageUploader.upload(e.target.files[0]);
        console.log(`uploaded`, uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };
    return (
        <div className={styles.container}>
            <input onChange={onChange} ref={inputRef} className={styles.input} type="file" accept="image/*" name="file"></input>
            <button className={styles.button} onClick={onButtonClick}>
                {name || "No file"}
            </button>
        </div>
    );
}

export default Image_fileInput;
