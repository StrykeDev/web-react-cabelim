import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

import HomeHeader from "./HomeHeader/HomeHeader";
import FeaturesHightlight from "./FeaturesHightlight/FeaturesHightlight";
import ClientsHightlight from "./ClientsHightlight/ClientsHightlight";

function Home() {
  return (
    <Box>
      <HomeHeader />

      <FeaturesHightlight />

      {/* Store */}
      <Box style={{ backgroundColor: "#eee" }}>
        <Container>
          <Box textAlign="center" py={50}>
            <Typography variant="h4">Store is under construction!</Typography>
            <Typography variant="subtitle1">Come back later.</Typography>
          </Box>
        </Container>
      </Box>

      <ClientsHightlight />
    </Box>
  );
}

export default Home;
