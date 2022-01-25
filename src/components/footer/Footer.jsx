import React, { memo } from "react";
import styles from "./Footer.module.css";
const Footer = memo(() => {
    return <h2 className={styles.footerTitle}>Create your Business Card</h2>;
});

export default Footer;
