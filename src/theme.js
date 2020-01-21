import { createMuiTheme } from '@material-ui/core/styles';

/**
 * The custom Material UI theme used across the whole app.
 *
 * @constant
 */
const theme = createMuiTheme({
  palette: {
    primary: { main: '#673ab7' },
    secondary: { main: '#651fff' },
  },
  typography: {
    body1: {
      lineHeight: 1.7,
    },
  },
  overrides: {
    MuiDialog: {
      paper: {
        margin: 16,
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 32px)',
      },
    },
  },
});

export default theme;
