import React from "react";
import { firaCode } from "@/assets/fonts";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className={`${styles.container} section-margin`}>
      <div
        className={`${firaCode.className} ${styles.header}  d-flex align-items-center justify-content-between`}
      >
        <h3 className={` h-3 fw-medium color-light me-4`}>
          Here's what my clients has to say...
        </h3>
        <div className={`bg-color-primary w-100 ${styles.hr} mb-1`}></div>
      </div>
      <div
        className={`${styles.testimonials} d-flex align-items-center justify-content-center gap-5 flex-wrap`}
      >
        <TestimonialCard />
        <TestimonialCard />I
      </div>
    </div>
  );
};

export default Testimonials;

interface TestimonialCardProps {}

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className={`${styles.card} position-relative`}>
      <div
        className={`${styles["img-container"]} d-flex align-items-center justify-content-center`}
      >
        <Image
          className="rounded-circle"
          height={80}
          width={80}
          src="https://media.licdn.com/dms/image/D4D03AQGyLiK_H-KdPA/profile-displayphoto-shrink_800_800/0/1673636094627?e=1699488000&v=beta&t=AjeNgiJfof7vpWYsdxKuL8t_gU9enaL_pxUL1p3BgOU"
          alt=""
        />
      </div>
      <p>
        <q>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </q>
      </p>
      <h5>Rick Wright</h5>
      {/* <p></p> */}
    </div>
  );
};
