import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
