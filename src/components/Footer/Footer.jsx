import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import FACEBOOK from "../../images/facebook.svg";
import INSTAGRAM from "../../images/instagram.svg";
import PINTEREST from "../../images/Pinterest.svg";
import WHATSAPP from "../../images/whatsapp.svg";
import YOUTUBE from "../../images/youtube.svg";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contacts}>
      <h5 className={styles.contacts__title}>Contact Us</h5>
      <div className={styles.contacts__address}>
        1487 Rocky Horse Carrefour 1487 Rocky <br />
        Horse Arlington, TX 16819 United
      </div>
      <a className={styles.contacts__email} href="#">
        Electbox@Blocks.Com
      </a>
      <a className={styles.contacts__phone} href="#">
        +8 520-150-001
      </a>
      <ul className={styles.contacts__social}>
        <li className={styles.contacts__list}>
          <a href="#">
            <img src={FACEBOOK} alt="facebook" />
          </a>
        </li>
        <li className={styles.contacts__list}>
          <a href="#">
            <img src={INSTAGRAM} alt="instagram" />
          </a>
        </li>
        <li className={styles.contacts__list}>
          <a href="#">
            <img src={PINTEREST} alt="pinterest" />
          </a>
        </li>
        <li className={styles.contacts__list}>
          <a href="#">
            <img src={WHATSAPP} alt="whatsapp" />
          </a>
        </li>
        <li className={styles.contacts__list}>
          <a href="#">
            <img src={YOUTUBE} alt="youtube" />
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.footer__links}>
      <nav className={styles.footer__nav} >
        <ul className={styles.footer__social}>
          <li className={styles.social__title}>Need Help?</li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Contact Us</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Shipping</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Sitemap</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">FAQs</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Stores</a>
          </li>
        </ul>

        <ul className={styles.footer__social}>
          <li className={styles.social__title}>Information</li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Policy For Buyers</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Policy For Sellers</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Terms And Conditions</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Shipping & Refund</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Wholesale Policy</a>
          </li>
        </ul>

        <ul className={styles.footer__social}>
          <li className={styles.social__title}>About us</li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">About Us</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Delivery Information</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Privacy Policy</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Terms And Conditions</a>
          </li>
          <li className={styles.social__list}>
            <a className={styles.social__link} href="#">Search</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
