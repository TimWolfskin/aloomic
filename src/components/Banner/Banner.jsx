import React from "react";

import styles from "../../styles/Home.module.css";

import bannerImg from "../../images/bannerImg.jpg";
import saleImage from "../../images/summerSale.png";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        SUMMER
        <span>SALE</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>
    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className={styles.right__content}>
      <p>special offer</p>
      <p>$39 only</p>
      <p>on every theme</p>
      </div>
      <p className={styles.discount}>
        the sale ends by june 24 2023
      </p>
    </div>
  </section>
);

export default Banner;
