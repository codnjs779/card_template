import React, { useRef, useState, memo } from "react";

import styles from "../image_fileInput/Image_fileInput.module.css";
// 이미지 이름, 파일 바뀌면 불러줄 수 있는 콜백 필요
const Image_fileInput = memo(({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const onButtonClick = (e) => {
        // inpput 클릭시 페이지 업로드 되는 것 방지
        e.preventDefault();
        inputRef.current.click();
    };
    const onChange = async (e) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(e.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };
    return (
        <div className={styles.container}>
            <input onChange={onChange} ref={inputRef} className={styles.input} type="file" accept="image/*" name="file"></input>
            {!loading && (
                <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                    {name || "No file"}
                </button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
});

export default Image_fileInput;
