import styles from "./ContactHero.module.css";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-title" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title} id="contact-title">
          Contact Us
        </h1>
        <p className={styles.description}>
          Complete turnover management ensuring your space is fully operational,
          documented, and ready for success from day one.
        </p>
      </div>
    </section>
  );
}
