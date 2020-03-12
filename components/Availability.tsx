import React from "react";

import "./Availability.scss";

const NAME: string = "Availability";

/**
 * Represents a bar indicating whether I'm available for new opportunities or
 * not.
 */
const Availability: React.FC = (): React.ReactElement => {
  return (
    <div className={NAME}>
      <a
        href="mailto:alexander.claes10@gmail.com?subject=I've got work for you!"
        title="Mail me"
        target="_blank"
        rel="noopener noreferrer"
        className={`${NAME}__inner`}
      >
        <p>Currently available for new opportunities!</p>
      </a>
    </div>
  );
};

export default Availability;
