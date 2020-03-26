import React from "react";

import "./HomeHeader.scss";

const NAME: string = "HomeHeader";

/**
 * Represents header of homepage.
 */
const HomeHeader: React.FC = (): React.ReactElement => {
  return (
      <header className={NAME}>
        <div className={`${NAME}__inner`}>
          <img
            src="/avatar.png"
            alt="Alexander Claes"
            className={`${NAME}__avatar`}
          />
          <div className={`${NAME}__title`}>
            <p className="sub">I&apos;m Alexander Claes, a professional ...</p>
            <br />
            <h1>Full Stack Web Engineer</h1>
          </div>
          <p className="large description">
            ... building web applications with a passion for UI &amp; UX. I love
            keeping code simple and scalable. Based in Antwerp, Belgium.
          </p>
        </div>
      </header>
  );
};

export default HomeHeader;
