import { createMuiTheme } from '@material-ui/core/styles';

/**
 * The custom Material UI theme used across the whole app.
 *
 * @constant
 */
const theme = createMuiTheme({
  palette: {
    common: {
      black: '#fff',
      white: '#000',
    },
    type: 'dark',
    primary: { main: '#7542FF' },
    secondary: { main: '#651fff' },
    background: {
      paper: '#fff',
      default: '#2B195E',
    },
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
