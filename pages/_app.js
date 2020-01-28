import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Alexander Claes</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="image_src" href="/static/background.jpeg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5d31aa" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Front-end engineer with a passion for web performance. I love keeping code simple and scalable. Based in Antwerp, Belgium." />
          <meta name="keywords" content="alexander claes, alexander, claes" />
          <meta property="og:image" content="/static/background.jpeg" />
          <meta property="og:title" content="Alexander Claes" />
          <meta property="og:description" content="Front-end engineer with a passion for web performance. I love keeping code simple and scalable. Based in Antwerp, Belgium." />
          <style>{`
            ::selection {
              background-color: white;
              background: white;
              color: #2B195E;
            }
            @keyframes backgroundPosition {
              0% { background-position: 70% 50% }
              50% { background-position: 50% 50% }
              100% { background-position: 70% 50% }
            }
            @keyframes borderRadius {
              0% { border-radius: 90% 90% 90% 90% }
              50% { border-radius: 80% 90% 85% 90% }
              100% { border-radius: 90% 90% 90% 90% }
            }
            @keyframes borderRadius2 {
              0% { border-radius: 90% 90% 90% 90%; transform: skewY(-12deg) }
              50% { border-radius: 80% 90% 85% 90%; transform: skewY(-12deg) scale(0.985) }
              100% { border-radius: 90% 90% 90% 90%; transform: skewY(-12deg) }
            }
          `}</style>
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