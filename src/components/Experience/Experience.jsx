import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.wrapper}>
        <div className={styles.centerLine}></div>
        <div className={styles.timelineGroup}>
          <div className={`${styles.row} ${styles.row1}`}>
            <div className={styles.timelineItemFirst}>
              <div className={styles.icon}>
                <i className="home"></i>
              </div>
              <div className={styles.details}>
                <h3 className={styles.eventTitle}>Studying CS at university</h3>
                <span>2020-2024</span>
                <p>I study Computer Science at the West Kazakhstan University named after Makhambet Utemisov.</p>
                <div className={styles.button}>
                  <a href="https://wku.edu.kz/en/poisk/arkhiv-videoteki/175-m-temisov-atynda-y-batys-aza-stan-memlekettik-universitetini-studentteri-onlajn-o-u-a-k-shti">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.row} ${styles.row2}`}>
            <div className={styles.timelineItemSecond}>
              <div className={styles.icon}>
                <i className="star"></i>
              </div>
              <div className={styles.details}>
                <h3 className={styles.eventTitle}>Hackathon "SheCodes"</h3>
                <span>November 2022</span>
                <p>In November of the year before last, I was lucky enough to participate in a women's hackathon organized by Astana IT University. There, for the first time, 
                  I encountered real cases and attempts to solve them by the team, which was also the first time for me. The experience was incredible.
                </p>
                <div className={styles.button}>
                  <a href="https://astanahub.com/ru/event/khakaton-dlia-devushek-shecodes">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.row} ${styles.row1}`}>
            <div className={styles.timelineItemThird}>
              <div className={styles.icon}>
                <i className="rocket"></i>
              </div>
              <div className={styles.details}>
                <h3 className={styles.eventTitle}>NFactorial School</h3>
                <span>2023-2024</span>
                <p>In September of last year, I embarked on an enriching journey at the esteemed NFactory School, delving into the captivating realm of frontend development. Thanks to the gracious sponsorship of Astana Hub, I was honored to receive an 
                  educational grant, which not only empowered me with knowledge but also fueled my passion for technology and innovation.
                </p>
                <div className={styles.button}>
                  <a href="https://www.nfactorial.school/">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dotGroup}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
