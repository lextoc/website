import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import ReactGA from 'react-ga';

import DialogResume from '../components/DialogResume';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      minHeight: '100vh',
      paddingTop: '5vh',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      backgroundImage: 'url("/static/background.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      filter: 'grayscale(100%)',
      opacity: 0.15,
    },
  },
  paper: {
    marginTop: theme.spacing(12),
    paddingBottom: theme.spacing(7),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4),
    },
  },
  name: {
    fontSize: '2.5rem',
  },
  avatar: {
    transform: 'translateY(-' + theme.spacing(9) + 'px)',
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginRight: 'auto',
    marginBottom: '-' + theme.spacing(5) + 'px',
    marginLeft: 'auto',
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down('xs')]: {
      marginBottom: '-' + theme.spacing(6) + 'px',
    },
  },
  buttons: {
    marginTop: theme.spacing(7),
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
}));

/**
 * Returns the index page.
 *
 * @function
 * @returns {JSX.Element} The index page.
 */
function Index() {
  const classes = useStyles();
  const [isDialogResumeOpen, setOpenDialogResume] = React.useState(false);
  const handleClickOpen = () => {
    ReactGA.modalview('/resume');
    ReactGA.event({
      category: 'Resume',
      action: 'Clicked View Button',
      label: 'Opened Dialog Via Homepage',
    });
    setOpenDialogResume(true);
  };
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
  const handleClose = () => {
    setOpenDialogResume(false);
  };
  if (process.browser) {
    ReactGA.initialize('UA-86155073-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <Avatar
            alt="Alexander Claes"
            src="/static/avatar.jpg"
            className={classes.avatar}
          />
          <Container maxWidth="sm">
            <Typography gutterBottom variant="h1" className={classes.name}>
              Alexander Claes
            </Typography>
            <Typography gutterBottom color="textSecondary">
              Front-end engineer with a passion for web performance. I love
              keeping code simple and scalable. Using tools like Vim and
              linters to work fast yet clean. Based in Antwerp, Belgium.{' '}
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
              size="large"
              color="primary"
              title="View resume"
              onClick={handleClickOpen}
            >
              View resume
            </Button>
            <DialogResume
              handleClose={handleClose}
              open={isDialogResumeOpen}
            />
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
        </Paper>
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
    </div>
  );
}

export default Index;
