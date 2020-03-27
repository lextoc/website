import React from "react";

import "./CaseCard.scss";
import ANALYTICS from "../src/analytics";
import { ICaseObj } from "../src/interfaces";

const NAME: string = "CaseCard";

type Props = {
  caseObj: ICaseObj;
};

/**
 * Represents a bar indicating whether I'm available for new opportunities or
 * not.
 */
const CaseCard: React.FC<Props> = ({ caseObj }): React.ReactElement => {
  const handleClick = (e: any) => {
    e.preventDefault();
    ANALYTICS.handleCaseCardClick(caseObj);
    window.location.href = caseObj.link;
  };
  return (
    <a
      className={`${NAME}${
        caseObj.cardimage?.url ? "" : ` ${NAME}--solid-background`
      }`}
      style={{
        backgroundImage: caseObj.cardimage?.url
          ? `url("http://localhost:1337/${caseObj.cardimage?.url}")`
          : undefined
      }}
      href={caseObj.link}
      target="_blank"
      rel="noopener noreferrer"
      title={caseObj.name}
      onClick={e => handleClick(e)}
    >
      <div className={`${NAME}__inner`}>
        <h4>{caseObj.name}</h4>
        <p className="small">{caseObj.description}</p>
      </div>
    </a>
  );
};

export default CaseCard;
