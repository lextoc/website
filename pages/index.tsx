import { NextPage } from "next";
import React from "react";
import ReactGA from "react-ga";

import Availability from "../components/Availability";
import Cases from "../components/Cases";
import CookiesSnackbar from "../components/CookiesSnackbar";
import Footer from "../components/Footer";
// import TechnologiesList from "../components/TechnologiesList";
import WorkCTA from "../components/WorkCTA";
// import ANALYTICS from "../src/analytics";
import "./index.scss";

const NAME: string = "Home";

/**
 * Represents the homepage.
 */
const Home: NextPage = (): React.ReactElement => {
  if (process.browser) {
    ReactGA.initialize("UA-86155073-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <div className={NAME}>
      <CookiesSnackbar />
      <Availability />
      <header className={`${NAME}__header-wrapper`}>
        <div className={`${NAME}__header`}>
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
      <WorkCTA />
      <Cases />
      <section className="container">
        <div className={`${NAME}__about-me inner`}>
          <figure>
            <img src="/rocket.svg" alt="Rocket" />
          </figure>
          <div>
            <p className="sub">Scalability &amp; flexibility</p>
            <h2>The key to building successful digital apps</h2>
            <p>
              You did it, you&apos;ve figured out the concept of your new
              venture. <strong>Let&apos; start building it, ASAP.</strong>
            </p>
            <p>
              ... This is probably the most exciting part of your venture — but
              also the most dangerous one. Why? People tend to rush it without
              keeping a plan B in mind. What if your concept fails, but
              there&apos;s a way to <strong>recover</strong> from it?{" "}
              <strong>That</strong> is the key to{" "}
              <strong>a successful venture.</strong>
            </p>
            <p>
              In order to do this, not only the concept has to be adapted, but
              the application as well. That&apos;s where I jump in. I will make
              sure bottlenecks and roadblocks are discovered early on before
              making technological decisions and keep the application flexible
              by choosing the right stack.
            </p>
            <p>
              And on top of that, if your concept works,{" "}
              <strong>
                the application will scale with your new features and expanding
                userbase
              </strong>{" "}
              thanks to a clean approach with best practices.
              <br />
              <br />
            </p>
            <p>
              Ready to{" "}
              <a
                href="mailto:alexander.claes10@gmail.com?subject=Let's do this!"
                title="Mail me"
                target="_blank"
                rel="noopener noreferrer"
              >
                start your venture
              </a>
              ?
            </p>
            {/* <div className="btns">
              <button className="btn btn--primary">Tell me more</button>
              <button className="btn">Best practices?</button>
            </div> */}
          </div>
        </div>
      </section>
      {/* <TechnologiesList /> */}
      <WorkCTA />
      {/* <div className="container">
        <div className={`${NAME}__cta inner`}>
          <h3>Subscribe to my newsletter</h3>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
