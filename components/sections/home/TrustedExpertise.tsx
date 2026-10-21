import Image from "next/image";

import styles from "./TrustedExpertise.module.css";

export function TrustedExpertise() {
  return (
    <section
      aria-labelledby="trusted-expertise-title"
      className={styles.section}
      data-transition-expertise
    >
      <Image
        alt=""
        aria-hidden="true"
        className={styles.circles}
        height={658}
        src="/images/home/trusted-circles.svg"
        width={1952}
      />

      <div className={styles.topRule} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={styles.accentRule} aria-hidden="true" data-transition-heading />
          <h2 className={styles.heading} id="trusted-expertise-title" data-transition-heading>
            Trusted<br />Expertise
          </h2>
          <p className={styles.kicker} data-transition-kicker>In the Heart of New York City</p>
          <p className={styles.body} data-transition-body>
            JC Construction Management has been a cornerstone of New York
            City&apos;s construction landscape. We put your vision and needs
            first.
            <br />
            Our team of dedicated professionals understands that the quality
            of your building directly impacts your daily life and investment.
            We make sure that our extensive knowledge and hands-on approach
            navigate the complexities of NYC construction.
          </p>
        </div>

        <div className={styles.building} aria-hidden="true" data-transition-building>
          <Image
            alt=""
            className={styles.buildingImage}
            height={2500}
            sizes="(max-width: 767px) 85vw, (max-width: 1023px) 56vw, 45vw"
            src="/images/home/trusted-building.png"
            width={2500}
          />
        </div>
      </div>
      <div className={styles.bottomRule} aria-hidden="true" />
    </section>
  );
}
