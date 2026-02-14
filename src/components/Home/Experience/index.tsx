"use client";

import React, { useRef, useState, useLayoutEffect, forwardRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { poppins } from "@/assets/fonts";
import styles from "./index.module.css";
import { experienceList } from "./experienceDetails";

const LINE_START_PX = 80;

const BORDER_TRANSPARENT = "rgba(190, 69, 224, 0)";
const BORDER_VISIBLE = "rgba(190, 69, 224, 0.4)";

function NodeBorderProgress({
  index,
  scrollYProgress,
  threshold,
  children,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  threshold: number;
  children: React.ReactNode;
}) {
  const borderColor = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : [Math.max(0, threshold - 0.04), Math.min(1, threshold + 0.04)],
    index === 0 ? [BORDER_VISIBLE, BORDER_VISIBLE] : [BORDER_TRANSPARENT, BORDER_VISIBLE]
  );

  return (
    <motion.div className={styles.node} style={{ borderColor }}>
      {children}
    </motion.div>
  );
}

const ExperienceItem = forwardRef<
  HTMLDivElement,
  {
    entry: (typeof experienceList)[0];
    index: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    borderThreshold: number;
    children: React.ReactNode;
  }
>(function ExperienceItem(
  { entry, index, scrollYProgress, borderThreshold, children },
  ref
) {
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(innerRef, {
    once: true,
    margin: "-80px 0px -80px 0px",
    amount: 0.2,
  });

  const setRef = (el: HTMLDivElement | null) => {
    (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  return (
    <motion.div
      ref={setRef}
      className={styles.item}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <NodeBorderProgress index={index} scrollYProgress={scrollYProgress} threshold={borderThreshold}>
        {children}
      </NodeBorderProgress>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.companyWrap}>
            <a
              href={entry.website}
              target="_blank"
              rel="noreferrer"
              className={styles.company}
            >
              {entry.company}
            </a>
            {entry.role && (
              <span className={styles.role}>{entry.role}</span>
            )}
          </div>
          <span className={styles.meta}>
            {[entry.location, entry.type]
              .filter(Boolean)
              .map((t) => t)
              .join(" · ")}
          </span>
        </div>
        <span className={styles.date}>
          {entry.dateFrom} – {entry.dateTo}
          {entry.current && (
            <span className={styles.current}> · Current</span>
          )}
        </span>
        {entry.points?.length > 0 && (
          <ul className={styles.points}>
            {entry.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
});

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineWrapRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [borderThresholds, setBorderThresholds] = useState<number[]>(() =>
    experienceList.map((_, i) => (i === 0 ? 1 : 0))
  );

  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useLayoutEffect(() => {
    const wrap = timelineWrapRef.current;
    const items = itemsRef.current;
    if (!wrap || !items) return;

    const lineLength = wrap.offsetHeight - LINE_START_PX;
    if (lineLength <= 0) return;

    const thresholds: number[] = [];
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) {
        thresholds.push(i === 0 ? 1 : 0);
        continue;
      }
      const nodeY = items.offsetTop + el.offsetTop - LINE_START_PX;
      const t = i === 0 ? 1 : Math.max(0, Math.min(1, nodeY / lineLength));
      thresholds.push(t);
    }
    setBorderThresholds(thresholds);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.section} section-margin`}
    >
      <motion.header
        className={`${poppins.className} ${styles.header}`}
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h3 className="h-3 fw-medium color-light">Experience</h3>
        <div className={`bg-color-primary ${styles.hr}`} />
      </motion.header>

      <div ref={timelineWrapRef} className={styles.timelineWrap}>
        <motion.div
          className={styles.line}
          style={{
            transformOrigin: "top",
            scaleY: scrollYProgress,
          }}
        />
        <div ref={itemsRef} className={styles.items}>
          {experienceList.map((entry, i) => (
            <ExperienceItem
              key={entry.company + entry.dateFrom}
              entry={entry}
              index={i}
              scrollYProgress={scrollYProgress}
              borderThreshold={borderThresholds[i] ?? 0}
              ref={(el) => { itemRefs.current[i] = el; }}
            >
              {entry.logo ? (
                <Image
                  src={entry.logo}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.logo}
                />
              ) : (
                <span className={styles.initials}>
                  {entry.company
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
              )}
            </ExperienceItem>
          ))}
        </div>
      </div>
    </section>
  );
}
