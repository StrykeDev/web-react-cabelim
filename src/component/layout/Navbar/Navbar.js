import { Box, Container, Tabs, Tab, Grid, Hidden } from "@material-ui/core";
import React from "react";

function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              value={value}
              indicatorColor="secondary"
              onChange={handleChange}
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
