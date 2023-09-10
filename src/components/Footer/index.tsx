import React from "react";
import styles from "./index.module.css";
import { poppins } from "@/assets/fonts";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={`${styles.container} pt-5 ${poppins.className} section-margin`}>
      <div className="my-5 pt-5">
        <p className="text-center color-dim">
          Made with 🤟🏻 <br />
          Portfolio Version 2.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
