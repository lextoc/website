import React from "react";

import CaseCard from "./CaseCard";
import "./Cases.scss";

const CASES = [
  {
    name: "Avail",
    description: "On a mission to showcase the best in emerging fashion",
    image:
      "https://static.avail.store/a6cd0aa611ea483b95d91a9e4373fb57/about-our-curators.jpg",
    link: "https://avail.store"
  },
  {
    name: "World Wide Wet",
    description:
      "Online survey for Goedele Liekens, a famous Belgian sexologist",
    image: "/wwwet.png",
    link: "https://worldwide-wet.com/"
  },
  {
    name: "Scorrd",
    description: "The leading hockey network",
    image: "https://scorrd.com/images/og_logo.jpg",
    link: "https://scorrd.com/"
  },
  {
    name: "Omakase",
    description: "My previous employer's website with more cases",
    image:
      "https://omakase.digital/assets/og_logo-b547853d0e34976a812b6736f49775b649b51ed8cbef0969d2987a8ace106607.png",
    link: "https://omakase.digital/"
  },
  {
    name: "Headminer",
    description: "Positively exchange your contingent workforce",
    image: "https://www.headminer.com/images/og-image.jpg",
    link: "https://www.headminer.com/"
  },
  {
    name: "Your project?",
    description: "What are you waiting for? Let's get in touch",
    image: "",
    link: "mailto:alexander.claes10@gmail.com?subject=I've got work for you!"
  }
];

const NAME: string = "Cases";

/**
 * Represents a couple of cases to tease visitors.
 */
const Cases: React.FC = (): React.ReactElement => {
  return (
    <div className={NAME} id={NAME}>
      <div className={`${NAME}__container container`}>
        <div className={`${NAME}__inner inner`}>
          <div className={`${NAME}__content`}>
            <h3 className={`${NAME}__title`}>Showcase</h3>
            <p className={`${NAME}__text`}>
              A few hand-picked projects — including those of companies I worked
              at
            </p>
            <div className={`${NAME}__list`}>
              {CASES.map(data => (
                <div key={data.name} className={`${NAME}__CaseCard`}>
                  <CaseCard data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
