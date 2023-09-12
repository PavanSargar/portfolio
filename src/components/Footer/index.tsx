import React from "react";
import { SiNextdotjs, SiTypescript, SiBootstrap } from "react-icons/si";
import { poppins } from "@/assets/fonts";

import styles from "./index.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className={`${styles.container} pt-5 ${poppins.className} section-margin`}
    >
      <div className="mt-3 pt-3">
        <p className="text-center color-dim">Built using</p>
        <p className="text-center color-dim d-flex align-items-center justify-content-center gap-3">
          <SiNextdotjs size={24} /> <SiTypescript size={24} /> <SiBootstrap size={24} />
        </p>
        <br />
        <p className="text-center color-dim">
          Made with 🤟🏻 <br />
          Portfolio Version 2.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
