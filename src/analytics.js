import ReactGA from "react-ga";

const ANALYTICS = {
  handleMailClick: () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked Mail Button"
    });
  },
  handleTwitterClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked Twitter Link"
    });
  },
  handleLinkedInClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked LinkedIn Link"
    });
  },
  handleNextJSClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked NextJS Link"
    });
  },
  handleMaterialUIClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked Material UI Link"
    });
  },
  handleScorrdClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked Scorrd Link",
      label: "Inside Resume Dialog"
    });
  },
  handleWwwetClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked Wwwet Link",
      label: "Inside Resume Dialog"
    });
  },
  handleLetsOrderItClick: () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked LetsOrderIt Link",
      label: "Inside Resume Dialog"
    });
  },
  handleDownloadClick: () => {
    ReactGA.event({
      category: "Resume",
      action: "Clicked Download Link",
      label: "Inside Resume Dialog"
    });
  },
  handleCloseDialog: () => {
    ReactGA.event({
      category: "Resume",
      action: "Closed Dialog"
    });
  }
};

export default ANALYTICS;
