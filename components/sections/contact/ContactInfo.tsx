import { footerContact } from "@/components/layout/Footer/footerData";

import styles from "./ContactInfo.module.css";

type InfoItemProps = Readonly<{
  href: string;
  label: string;
  value: string;
}>;

function InfoItem({ href, label, value }: InfoItemProps) {
  return (
    <div className={styles.item}>
      <h3 className={styles.label}>{label}</h3>
      <span aria-hidden="true" className={styles.rule} />
      <a className={styles.value} href={href}>
        {value}
      </a>
      <p className={styles.hours}>
        Assistance hours:
        <br />
        Monday - Friday 6 am to
        <br />
        8 pm EST
      </p>
    </div>
  );
}

export function ContactInfo() {
  return (
    <section aria-labelledby="contact-info-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact Info</p>
          <h2 className={styles.heading} id="contact-info-title">
            We are always
            <br />
            happy to assist you
          </h2>
        </div>

        <InfoItem
          href={footerContact.emailHref}
          label="Email Address"
          value={footerContact.email}
        />
        <InfoItem
          href={footerContact.phoneHref}
          label="Number"
          value={footerContact.phone}
        />
      </div>
    </section>
  );
}
