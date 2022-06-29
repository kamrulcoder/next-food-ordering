import React from "react";
import styles from "../styles/footer.module.css"
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className={styles.footerdiv}>
      <p className={styles.footertext}>{emoji("Made with ❤️ by Kamrul Hasan")}</p>
    </div>
    </Fade>
  );
}