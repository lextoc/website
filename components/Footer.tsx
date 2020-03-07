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
      <div className="container">
        <div className={`${NAME}__inner`}>
          <figure>
            <div className="logo">
              <div>A</div>
            </div>
          </figure>
          <Link href="/">
            <a className={`${NAME}__root`}>
              &copy; 2020 All rights reserved — Alexander Claes
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
