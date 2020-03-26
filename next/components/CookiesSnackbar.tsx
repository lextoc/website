import Button from "@material-ui/core/Button";
import Portal from "@material-ui/core/Portal";
import Snackbar from "@material-ui/core/Snackbar";
import React, { Component } from "react";

// Represents a cookies disclaimer.
class CookiesSnackbar extends Component<{}, { isAccepted: boolean }> {
  /**
   * Constructs a CookiesSnackbar.
   */
  constructor(props: any) {
    super(props);
    this.state = {
      isAccepted: false
    };
  }

  /**
   * Bring accepted state up to date.
   */
  componentDidMount() {
    this.setState({
      isAccepted: localStorage.getItem("isCookiesAccepted") === "true"
    });
  }

  /**
   * Sets cookies as accepted.
   */
  handleAcceptClick = (e: any) => {
    e.preventDefault();
    localStorage.setItem("isCookiesAccepted", "true");
    this.setState({ isAccepted: true });
  };

  /**
   * Renders cookies notification.
   */
  render() {
    const { isAccepted } = this.state;
    if (isAccepted) return null;
    return (
      <Portal>
        <Snackbar
          open={!isAccepted}
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom"
          }}
          message={
            <span>
              In order to analyse usage of this site cookies are used. By
              continuing to browse this site you agree to the use of cookies.
            </span>
          }
          action={[
            <Button
              color="inherit"
              size="small"
              key="close"
              onClick={this.handleAcceptClick}
            >
              Close
            </Button>
          ]}
        />
      </Portal>
    );
  }
}

export default CookiesSnackbar;
