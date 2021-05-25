import React from "react";
import { useHistory } from "react-router";
import { Box, Container, Tabs, Tab, Grid, Hidden } from "@material-ui/core";

function Navbar(props) {
  const history = useHistory();
  const [navIndex, setNavIndex] = React.useState(() => {
    switch (history.location.pathname) {
      case "/":
        return 0;
      case "/store":
        return 1;
      case "/contact":
        return 2;
      default:
        return false;
    }
  });

  const handleChange = (event, index) => {
    setNavIndex(index);
    switch (index) {
      case 1:
        history.push("/store");
        break;
      case 2:
        history.push("/contact");
        break;
      default:
        history.push("/");
        break;
    }
  };

  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}>
          <Hidden smDown>
            <img src="./cabelim-logo.png" alt="Cabelim" height="64" />
          </Hidden>
          <Hidden mdUp>
            <img src="./logo512.png" alt="Cabelim" height="48" />
          </Hidden>
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" justifyContent="center">
            <Tabs
              value={navIndex}
              indicatorColor="secondary"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Home" style={{ minHeight: "72px" }} />
              <Tab label="Store" style={{ minHeight: "72px" }} />
              <Tab label="Contact" style={{ minHeight: "72px" }} />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Container>
  );
}

export default Navbar;
