import { Box, Container, Grid, SvgIcon, Typography } from "@material-ui/core";
import { Info } from "@material-ui/icons";

import logo from "./asset/cabelim-logo.png";
import header from "./asset/header.png";

function Home() {
  const headerBackground = {
    backgroundImage: `url(${header})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Box>
      {/* Header */}
      <Box style={{ backgroundColor: "#eee" }}>
        <Container style={headerBackground}>
          <Box px={1} py={10} width="50%">
            <Typography variant="h3">
              Powering people and industries.
            </Typography>
            <Typography variant="subtitle1">Coming soon...</Typography>
          </Box>
        </Container>
      </Box>

      {/* Features */}
      <Box py={10}>
        <Container>
          <Box textAlign="center">
            <Typography variant="h3">Why you should choose us?</Typography>
            <Typography variant="subtitle1">
              We providing the world with the best services.
            </Typography>
          </Box>

          <Box mx={5} mt={8}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
              spacing={10}
            >
              <Grid item xs={4}>
                <SvgIcon component={Info} fontSize="large" />
                <Typography>
                  Diam sea invidunt elitr ut invidunt aliquyam ipsum dolore
                  sadipscing sit. Kasd tempor voluptua nonumy diam takimata est
                  et lorem..
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <SvgIcon component={Info} fontSize="large" />
                <Typography>
                  Et diam sadipscing dolores kasd et elitr sanctus stet. Ipsum
                  elitr diam est magna sit sanctus duo vero dolor. Ipsum stet
                  elitr erat voluptua no.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <SvgIcon component={Info} fontSize="large" />
                <Typography>
                  Elitr sadipscing dolor ipsum sanctus takimata at voluptua, est
                  justo eos tempor rebum et ipsum ut. Consetetur et takimata
                  sadipscing est.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Store */}
      <Box style={{ backgroundColor: "#eee" }}>
        <Container>
          <Box textAlign="center" py={50}>
            <Typography variant="h3">Store is under construction!</Typography>
            <Typography variant="subtitle1">Come back later.</Typography>
          </Box>
        </Container>
      </Box>

      {/* Clients */}
      <Box py={10}>
        <Container>
          <Box textAlign="center">
            <Typography variant="h3">Our happy clients</Typography>
            <Typography variant="subtitle1">
              Thank you for choosing us!
            </Typography>
          </Box>

          <Box mx={5} mt={8}>
            <Grid container direction="row" justify="space-around" spacing={10}>
              <img src={logo} alt="logo" width="150" />
              <img src={logo} alt="logo" width="150" />
              <img src={logo} alt="logo" width="150" />
              <img src={logo} alt="logo" width="150" />
              <img src={logo} alt="logo" width="150" />
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
