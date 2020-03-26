import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import React from "react";

import "./Footer.scss";

const NAME: string = "Footer";

/**
 * Represents the footer used across the site.
 */
const Footer: React.FC = (): React.ReactElement => {
  const router: NextRouter = useRouter();
  return (
    <footer className={NAME}>
      {/* <div className="container">
        <div className={`${NAME}__content inner`}>
          <div className={`${NAME}__block`}>
            <div className={`${NAME}__block-title`}>Contact</div>
            <div className={`${NAME}__block-content`}>
              <address>
                Mechelsesteenweg 271 / 1.1
                <br />
                2018 Antwerp
                <br />
                Belgium
              </address>
              <a href="tel:0032476430997">+32 476 43 09 97</a>
              <a href="mailto:alexander.claes10@gmail.com">
                alexander.claes10@gmail.com
              </a>
            </div>
          </div>
          <div className={`${NAME}__block`}>
            <div className={`${NAME}__block-title`}>Find me</div>
            <div className={`${NAME}__block-content`}>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </div> */}
      <div className={`${NAME}__copyright`}>
        <div className="container">
          <div className="inner">
            <p>
              &copy; 2020 All rights reserved — Alexander Claes — BE
              0708.864.518
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
