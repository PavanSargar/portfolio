import React from "react";
import { poppins } from "@/assets/fonts";
import Image from "next/image";
import styles from "./index.module.css";
import { testimonials } from "./testimonialDetails";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className={`${styles.container} section-margin`}>
      <div
        className={`${poppins.className} ${styles.header}  d-flex align-items-center justify-content-between`}
      >
        <h3 className={` h-3 fw-medium color-light me-4`}>
          Here's what my clients has to say...
        </h3>
        <div className={`bg-color-primary w-100 ${styles.hr} mb-1`}></div>
      </div>

      <div className="d-flex align-items-start justify-content-center mb-5">
        <TestimonialCard
          key={testimonials[3].name}
          name={testimonials[3].name}
          img={testimonials[3].img}
          description={testimonials[3].description}
          url={testimonials[3].url}
        />
      </div>

      <div
        className={`${styles.testimonials} d-flex align-items-start justify-content-center gap-5 flex-wrap`}
      >
        {Object.values(testimonials)
          .slice(0, 2)
          .map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              img={item.img}
              description={item.description}
              url={item.url}
            />
          ))}
      </div>
      <div className="d-flex align-items-start justify-content-center mt-5">
        <TestimonialCard
          key={testimonials[4].name}
          name={testimonials[4].name}
          img={testimonials[4].img}
          description={testimonials[4].description}
          url={testimonials[4].url}
        />
      </div>

    </div>
  );
};

export default Testimonials;

interface TestimonialCardProps {
  name: string;
  img: string;
  description: string;
  url: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, img, description, url } = props;
  return (
    <div className={`${styles.card} position-relative`}>
      <div
        className={`${styles["img-container"]} d-flex align-items-center justify-content-center`}
      >
        <Image
          className="rounded-circle"
          height={80}
          width={80}
          src={img}
          alt={name}
        />
      </div>
      <p>
        <q>{description}</q>
      </p>
      <h5>{name}</h5>
      <div className="d-flex justify-content-center">
        <a className="text-center color-dim " href={url} target="__blank">
          View Profile
        </a>
      </div>

      {/* <p></p> */}
    </div>
  );
};
