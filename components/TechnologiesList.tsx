import React from "react";

import "./TechnologiesList.scss";

const NAME: string = "TechnologiesList";

/**
 * Represents a list with all the technologies I use.
 */
const TechnologiesList: React.FC = (): React.ReactElement => {
  return (
    <div className={NAME}>
      <div className="container">
        <div className={`${NAME}__inner inner`}>
          <a
            className={`${NAME}__link ${NAME}__link--small`}
            href="https://reactjs.org/"
            title="React"
          >
            <img
              className={`${NAME}__image`}
              src="/icons/react.svg"
              alt="React"
            />
          </a>
          <a
            className={`${NAME}__link ${NAME}__link--small`}
            href="https://www.typescriptlang.org/"
            title="TypeScript"
          >
            <img
              className={`${NAME}__image`}
              src="/icons/typescript.svg"
              alt="TypeScript"
            />
          </a>
          <a
            className={`${NAME}__link`}
            href="https://www.ruby-lang.org/en/"
            title="Ruby"
          >
            <img
              className={`${NAME}__image`}
              src="/icons/ruby.png"
              alt="Ruby language"
            />
          </a>
          <a
            className={`${NAME}__link ${NAME}__link--small`}
            href="https://rubyonrails.org/"
            title="Ruby on Rails"
          >
            <img
              className={`${NAME}__image ${NAME}__image--small`}
              src="/icons/rails.svg"
              alt="Ruby on Rails"
            />
          </a>
          <a
            className={`${NAME}__link ${NAME}__link--small`}
            href="https://webpack.js.org/"
            title="Webpack"
          >
            <img
              className={`${NAME}__image`}
              src="/icons/webpack.png"
              alt="Webpack"
            />
          </a>
          <a
            className={`${NAME}__link ${NAME}__link--small`}
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            title="JavaScript"
          >
            <img
              className={`${NAME}__image`}
              src="/icons/javascript.png"
              alt="JavaScript"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesList;
