import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import "./index.css";
import App from "./component/App";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { amber, grey } from "@material-ui/core/colors";

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
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
