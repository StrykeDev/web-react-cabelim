import React from "react";
import { Route, Switch } from "react-router";
import { Grid } from "@material-ui/core";

import Home from "./page/Home/Home";
import Store from "./page/Store/Store";
import Contact from "./page/Contact/Contact";
import Error from "./page/Error/Error";

import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Navbar />
      </Grid>

      <Grid item xs>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
