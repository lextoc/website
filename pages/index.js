import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import ReactGA from 'react-ga';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right, transparent 0%, rgba(255, 255, 255, 0.07) 30%, transparent 100%)',
    backgroundPosition: '70% 50%',
    backgroundSize: '300% 300%',
    // animation: 'backgroundPosition 30s ease infinite',
    ['&::before']: {
      content: '""',
      borderRadius: '90%',
      borderTopRightRadius: '0',
      position: 'absolute',
      zIndex: -1,
      top: '10vh',
      bottom: '10vh',
      right: '-100vw',
      left: '-100vw',
      width: 'calc(100% + 200vw)',
      height: '100%',
      background: '#1F1241',
      display: 'block',
      transform: 'skewY(-12deg)',
      // animation: 'borderRadius 30s ease infinite',
      boxShadow: `0 0 25px #2B195E`,
    },
    ['&::after']: {
      content: '""',
      borderRadius: '90%',
      position: 'absolute',
      zIndex: -1,
      top: '10vh',
      bottom: '100vh',
      right: '-50vw',
      left: '-50vw',
      width: 'calc(100% + 100vw)',
      height: '100%',
      background: '#1F1241',
      display: 'block',
      transform: 'skewY(-12deg)',
      boxShadow: `0 0 75px #2B195E inset`,
      backgroundImage: 'url("/static/background.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.06',
      // animation: 'borderRadius2 30s ease infinite',
    },
  },
  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'white',
    marginTop: '0.6em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.3em',
    },
  },
  buttons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icons: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  footer: {
    width: `calc(100% - ${theme.spacing(1)}px - ${theme.spacing(1)}px)`,
    marginTop: 'auto',
    paddingTop: '6em',
    textAlign: 'right',
    opacity: '0.5',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingBottom: '1em',
    },
  },
  avatar: {
    boxShadow: `0 0 25px #2B195E`,
    borderRadius: '50%',
    border: '4px solid #1F1241',
    margin: '4em auto 0',
    display: 'block',
    width: '50vw',
    maxWidth: '200px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '160px',
    },
  },
}));

/**
 * Returns the index page.
 *
 * @function
 * @returns {JSX.Element} The index page.
 */
function Index() {
  const classes = useStyles();
  const handleMailClick = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Clicked Mail Button',
    });
  };
  const handleTwitterClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked Twitter Link',
    });
  };
  const handleLinkedInClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked LinkedIn Link',
    });
  };
  const handleNextJSClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked NextJS Link',
    });
  };
  const handleMaterialUIClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked Material UI Link',
    });
  };
  if (process.browser) {
    ReactGA.initialize('UA-86155073-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.content}>
        <img
          alt="Alexander Claes"
          src="/static/avatar.jpg"
          className={classes.avatar}
        />
        <Container maxWidth="sm">
          <Typography gutterBottom variant="h1" className={classes.name} align="center">
            Alexander Claes
          </Typography>
          <Typography gutterBottom align="center">
            Front-end engineer with a passion for web performance. I love
            keeping code simple and scalable. Based in Antwerp, Belgium.{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            <span role="img" aria-label="belgian flag">
              🇧🇪
            </span>
          </Typography>
        </Container>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="mailto:alexander.claes10@gmail.com"
            target="_blank"
            title="Contact via email"
            startIcon={<MailIcon />}
            onClick={handleMailClick}
          >
            Get in touch
          </Button>
        </Box>
        <Box className={classes.icons} m={1}>
          <IconButton
            aria-label="go to twitter profile"
            title="Visit Twitter profile"
            href="https://twitter.com/alexander_claes"
            target="_blank"
            onClick={handleTwitterClick}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="go to linkedin profile"
            title="Visit LinkedIn profile"
            href="https://www.linkedin.com/in/alexander-claes-261aa3128/"
            target="_blank"
            onClick={handleLinkedInClick}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
      <Box className={classes.footer} color="text.secondary" fontSize="small" m={1}>
        Made with{' '}
        <Link href="https://nextjs.org/" color="textPrimary" target="_blank" onClick={handleNextJSClick} title="Go to Next.js website">
          Next.js
        </Link>{' '}
        and{' '}
        <Link href="https://material-ui.com/" color="textPrimary" target="_blank" onClick={handleMaterialUIClick} title="Go to Material UI website">
          Material UI
        </Link>{' '}
        <span role="img" aria-label="love heart">
          ❤️
        </span>
      </Box>
    </div>
  );
}

export default Index;
