import React from "react";

import "./CaseCard.scss";

const NAME: string = "CaseCard";

type Props = {
  data: any;
};

/**
 * Represents a bar indicating whether I'm available for new opportunities or
 * not.
 */
const CaseCard: React.FC<Props> = ({ data }): React.ReactElement => {
  return (
    <a
      className={`${NAME}${data.image ? "" : ` ${NAME}--solid-background`}`}
      style={{
        backgroundImage: data.image ? `url("${data.image}")` : undefined
      }}
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      title={data.name}
    >
      <div className={`${NAME}__inner`}>
        <h4>{data.name}</h4>
        <p className="small">{data.description}</p>
      </div>
    </a>
  );
};

export default CaseCard;
