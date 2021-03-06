import React from "react";

import "./WorkCTA.scss";

const NAME: string = "WorkCTA";

/**
 * Represents a CTA block for contacting me for work.
 */
const WorkCTA: React.FC = (): React.ReactElement => {
  return (
    <section className={NAME}>
      <div className="container">
        <div className={`${NAME}__inner inner`}>
          <div>
            <p className="sub">Let&apos;s do this</p>
            <h2>
              Do you have a project for me?
              <br />I love <span>working</span>
            </h2>
            <p>
              Next to my full-time job, I&apos;m available as a freelance web
              engineer and designer. Do you have an application, website or MVP
              that needs to be built? Are you having trouble finding a talented
              developer?
            </p>
            <p>
              Hesitate no longer and contact me. With over 4 years of experience
              in <a href="#Cases">over 15+ projects</a>, I&apos;m the developer
              for your digital product.{" "}
              <strong>Let&apos;s get in touch!</strong>
            </p>
            <div className="btns">
              <a
                href="mailto:alexander.claes10@gmail.com?subject=Let's get in touch!"
                title="Email me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Get in touch by email
              </a>
              <a
                href="tel:0032476430997"
                title="Call me"
                className="btn btn--white"
              >
                Tel: +32 476 43 09 97
              </a>
            </div>
          </div>
          <div>
            <div className="logo logo--animated">
              <div>A</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCTA;
