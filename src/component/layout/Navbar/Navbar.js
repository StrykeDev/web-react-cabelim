import { Box, Container, Tabs, Tab, Grid } from "@material-ui/core";

function Navbar() {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}>
          <img src="./logo512.png" alt="Cabelim" width="32" />
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" justifyContent="center">
            <Tabs value="1">
              <Tab label="Store" />
              <Tab label="About" />
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
