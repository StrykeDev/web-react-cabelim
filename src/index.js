import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { amber, grey } from "@material-ui/core/colors";
import "@fontsource/roboto";

import App from "./component/App";

import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: grey,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
