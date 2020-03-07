import { createMuiTheme } from "@material-ui/core/styles";

/**
 * The custom Material UI theme used across the whole app.
 *
 * @constant
 */
const theme = createMuiTheme({
  typography: {
    fontFamily: "'Hind', 'Helvetica', 'Arial', sans-serif"
  },
  palette: {
    background: {
      default: "#f6f7f9",
      paper: "#ffffff"
    }
  },
  overrides: {
    MuiDialog: {
      paper: {
        margin: 16
      },
      paperScrollPaper: {
        maxHeight: "calc(100% - 32px)"
      }
    }
  }
});

export default theme;
