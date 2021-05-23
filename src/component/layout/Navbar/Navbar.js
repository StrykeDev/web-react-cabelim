import { Box, Container, Tabs, Tab, Grid } from "@material-ui/core";
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
          <img src="./logo512.png" alt="Cabelim" width="32" />
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" justifyContent="center">
            <Tabs
              value={value}
              indicatorColor="primary"
              onChange={handleChange}
            >
              <Tab label="Home" />
              <Tab label="Store" />
              <Tab label="Contact" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Container>
  );
}

export default Navbar;
