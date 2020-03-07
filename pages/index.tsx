import { NextPage } from "next";
import React from "react";
import ReactGA from "react-ga";

import Footer from "../components/Footer";
import ANALYTICS from "../src/analytics";
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
      <div className={`${NAME}__availability`}>
        <p>Currently available for new opportunities!</p>
      </div>
      <header className={`${NAME}__header`}>
        <img
          src="/avatar.jpg"
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
      </header>
      {/* <div className={`${NAME}__skills`}>
        <div className="container">
          <div className={`${NAME}__skills-inner`}>
            Here comes a list of icons of all the frameworks and libraries I use
          </div>
        </div>
      </div> */}
      <div className={`${NAME}__dark-background`}>
        <div className="container">
          <div className={`${NAME}__dark-background-inner`}>
            <div>
              <p className="sub">Let&apos;s do this</p>
              <h2>
                Do you have a project for me?
                <br />I love <span>working</span>
              </h2>
              <p>
                Next to my full-time job, I&apos;m available as a freelance web
                engineer and designer. Do you have an application or MVP that
                needs to be build? Are you having trouble finding a talented
                developer?
              </p>
              <p>
                Hesitate no longer and contact me. With over 4 years of
                experience in over <a href="#">15+ projects</a>, I&apos;m the
                developer for your next venture.{" "}
                <strong>Let&apos; get in touch!</strong>
              </p>
              <button className="btn btn--primary">Get in touch</button>
            </div>
            <div>
              <div className="logo">
                <div>A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${NAME}__about-me`}>
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
              In order to do this, not only the concept has to be changed, but
              the application as well. That&apos;s where I jump in. I will make
              sure bottlenecks and roadblocks are discovered before making
              technological decisions and keep the application flexible by
              choosing the right stack.
            </p>
            <p>
              And on top of that, if your concept works,{" "}
              <strong>the application will scale with your new features</strong>{" "}
              thanks to a clean approach with best practices.
            </p>
            <button className="btn btn--primary">Tell me more</button>
            <button className="btn">Best practices?</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${NAME}__cta`}>
          <h3>Subscribe to my newsletter</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
