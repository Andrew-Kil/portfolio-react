import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2b2d42",
    },
    secondary: {
      main: "#8d99ae",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#edf2f4",
    },
  },
});

export default theme;
