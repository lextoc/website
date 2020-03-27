import React from "react";

import { ICaseObj } from "../src/interfaces";
import CaseCard from "./CaseCard";
import "./Cases.scss";

const NAME: string = "Cases";

type Props = {
  cases: ICaseObj[];
};

/**
 * Showcases given cases.
 */
const Cases: React.FC<Props> = ({ cases }): React.ReactElement | null => {
  return (
    <section className={NAME} id={NAME}>
      <div className={`${NAME}__container container`}>
        <div className={`${NAME}__inner inner`}>
          <div className={`${NAME}__content`}>
            <h3 className={`${NAME}__title`}>Showcase</h3>
            <p className={`${NAME}__text`}>
              A few hand-picked projects — including those of companies I worked
              at
            </p>
            <div className={`${NAME}__list`}>
              {cases?.map(value => (
                <article key={value.name} className={`${NAME}__CaseCard`}>
                  <CaseCard caseObj={value} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
