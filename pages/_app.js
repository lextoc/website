import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "next/app";
import Head from "next/head";
import React from "react";

import theme from "../src/theme";
import "../src/styles.scss";

class Website extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Full Stack Web Engineer — Alexander Claes</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Hind:400,500,700|Poppins:700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="image_src" href="/background.jpeg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5d31aa" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="I'm Alexander Claes, a professional Full Stack Web Engineer building web applications with a passion for UI & UX. I love keeping code simple and scalable. Based in Antwerp, Belgium."
          />
          <meta name="keywords" content="alexander claes, alexander, claes" />
          <meta
            property="og:title"
            content="Full Stack Web Engineer — Alexander Claes"
          />
          <meta
            property="og:description"
            content="I'm Alexander Claes, a professional Full Stack Web Engineer building web applications with a passion for UI & UX. I love keeping code simple and scalable. Based in Antwerp, Belgium."
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default Website;
