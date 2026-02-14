"use client";

import React, { useRef } from "react";
import { poppins } from "@/assets/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Button from "@/components/Button";
import styles from "./index.module.css";
import { testimonials } from "./testimonialDetails";

const list = Object.values(testimonials);

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`${styles.section} section-margin`}
    >
      <motion.header
        className={`${poppins.className} ${styles.header}`}
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="h-3 fw-medium color-light">Here&apos;s what my clients have to say</h3>
        <div className={`bg-color-primary ${styles.hr}`} />
      </motion.header>

      <div className={styles.scrollWrap}>
        <motion.div
          className={styles.track}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.12 },
            },
          }}
        >
          {list.map((item, i) => (
            <motion.div
              key={item.name}
              className={styles.cardWrap}
              variants={cardVariants}
              custom={i}
            >
              <TestimonialCard
                name={item.name}
                img={item.img}
                description={item.description}
                url={item.url}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/pavansargar">
          <Button className="fs-6" size="md" variant="dark">
            More reviews
          </Button>
        </a>
      </motion.div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  img: string;
  description: string;
  url: string;
}

function TestimonialCard({ name, img, description, url }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}>
        <Image src={img} alt={name} width={48} height={48} className={styles.avatarImg} />
      </div>
      <span className={styles.name}>{name}</span>
      <blockquote className={styles.quote}>{description}</blockquote>
      <a
        className={styles.link}
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        View profile
      </a>
    </article>
  );
}
