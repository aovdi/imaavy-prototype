import Button from '../Button/Button'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <img src="/assets/images/jj-withme-wordmark.svg" alt="J&J withMe" className={styles.footerLogoImg} />
          </div>
          <div className={styles.footerPhone}>
            <img src="/assets/images/phone-icon.svg" alt="" className={styles.phoneIcon} />
            <div className={styles.footerPhoneText}>
              <strong>Call 888-750-8733</strong>
              Monday–Friday, 8:00 AM–11:00 PM ET
            </div>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <p>The support and resources provided by Johnson & Johnson are not intended to provide medical advice, replace a treatment plan you receive from your doctor or nurse, or serve as a reason for you to start or stay on treatment.</p>
          <p>Eligibility for program components may vary.</p>
          <p>Information about your insurance coverage, cost support options, and treatment support is given to you by service providers for Johnson & Johnson. The information you get does not require you to use any J&J product. The information about whether your treatment is covered by your health plan comes from outside sources. It is not a promise of coverage or payment. You should contact your health plan directly for the most current information. You are responsible for meeting your health plan requirements.</p>
        </div>

        <Button variant="contact">Contact Us</Button>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLegalRow}>
          <div className={styles.footerJjLogoCol}>
            <img src="/assets/images/johnson-johnson.png" alt="Johnson & Johnson" className={styles.footerJjLogoImg} />
          </div>
          <div className={styles.footerLegal}>
            <p>This site is published by Johnson & Johnson Health Care Systems Inc., which is solely responsible for its contents. The material on this site is intended only as informational or as an educational aid and it is not intended to be taken as medical advice. The ultimate responsibility for patient care resides with a healthcare professional.</p>
            <p>This information is intended for the use of patients and care partners in the United States and its territories only. Laws, regulatory requirements, and medical practices for pharmaceutical products vary from market to market. The Prescribing Information included here may not be appropriate for use outside the United States and its territories.</p>
            <p>Third party trademarks used herein are trademarks of their respective owners.</p>
            <p>Last updated November 2025</p>
          </div>
        </div>

        <div className={styles.footerCopyrightRow}>
          <span className={styles.footerCopyright}>© Johnson & Johnson and its affiliates 2025</span>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLinksRow}>
              <a href="#">Privacy policy</a>
              <a href="#">Legal notice</a>
              <a href="#">Cookie policy</a>
              <a href="#">Cookie settings</a>
            </div>
            <div className={styles.footerLinksRow}>
              <a href="#">Do not sell or share my personal information</a>
              <a href="#">Limit the use of my sensitive personal information</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
