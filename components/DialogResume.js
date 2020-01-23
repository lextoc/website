import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import React from 'react';
import ReactGA from 'react-ga';

/**
 * Returns resume dialog.
 *
 * @function
 * @param {object} props Drops for dialog.
 * @returns {JSX.Element} Resume dialog.
 */
function DialogResume(props) {
  const { handleClose, open } = props;
  const handleScorrdClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked Scorrd Link',
      label: 'Inside Resume Dialog',
    });
  };
  const handleWwwetClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked Wwwet Link',
      label: 'Inside Resume Dialog',
    });
  };
  const handleLetsOrderItClick = () => {
    ReactGA.event({
      category: 'Outbound',
      action: 'Clicked LetsOrderIt Link',
      label: 'Inside Resume Dialog',
    });
  };
  const handleDownloadClick = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'Clicked Download Link',
      label: 'Inside Resume Dialog',
    });
  };
  const onClose = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'Closed Dialog',
    });
    handleClose();
  };
  return (
    <Dialog onClose={onClose} aria-labelledby="resume" open={open}>
      <DialogTitle id="resume" onClose={onClose}>
        Resume of Alexander Claes
      </DialogTitle>
      <DialogContent dividers>
        <Box mb={2}>
          <Typography variant="h6" component="h3">
            Avail (e-commerce startup)
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Mar 2019 - Present
          </Typography>
          <Typography gutterBottom variant="body2">
            Responsible for the client-side react application for a fashion
            e-commerce platform. Using tools like Webpack with code splitting
            and Redux for optimal performance and speed. Collaborated closely
            with both designers for iterations, back-end developer for
            structure, and fashion-minded colleagues for feedback.
          </Typography>
        </Box>
        <Divider light />
        <Box mt={2} mb={2}>
          <Typography variant="h6" component="h3">
            Omakase (web agency)
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Oct 2016 - Mar 2019
          </Typography>
          <Typography gutterBottom variant="body2">
            When I graduated I took a job at Omakase, and shifted more towards
            front-end development (still within Ruby on Rails). Two examples of
            the projects I worked on are an online field hockey platform (
            <Link
              href="https://scorrd.com/"
              target="_blank"
              onClick={handleScorrdClick}
            >
              https://scorrd.com/
            </Link>
            ) and an assignment for Goedele Liekens, a famous Belgian sexologist
            (
            <Link
              href="https://worldwide-wet.com/"
              target="_blank"
              onClick={handleWwwetClick}
            >
              https://worldwide-wet.com/
            </Link>
            ).
          </Typography>
        </Box>
        <Divider light />
        <Box mt={2} mb={2}>
          <Typography variant="h6" component="h3">
            Digiti (web agency)
          </Typography>
          <Typography gutterBottom color="textSecondary">
            Feb 2016 - May 2016
          </Typography>
          <Typography gutterBottom variant="body2">
            During my internship I built a Ruby on Rails application which
            allowed multiple companies from the same building to order lunch
            from a restaurant. It’s still in use today at{' '}
            <Link
              href="http://www.letsorderit.be/"
              target="_blank"
              onClick={handleLetsOrderItClick}
            >
              http://www.letsorderit.be/
            </Link>
            .
          </Typography>
        </Box>
        <Divider light />
        <Box mt={2} mb={2}>
          <Typography variant="h6" component="h3">
            Multimedia and Communication Technologies at Karel de Grote
          </Typography>
          <Typography gutterBottom color="textSecondary">
            2012 - 2016
          </Typography>
          <Typography gutterBottom variant="body2">
            I attained my professional bachelor at Karel de Grote. The course
            curriculum included web development, programming, design and
            usability.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
        <Button
          href="/static/resume_alexander_claes.pdf"
          download
          target="_blank"
          onClick={handleDownloadClick}
          color="primary"
          startIcon={<GetAppIcon />}
        >
          Download
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogResume;
