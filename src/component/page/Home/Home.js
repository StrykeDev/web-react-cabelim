import React from "react";
import { Box } from "@material-ui/core";

import HomeHeader from "./HomeHeader/HomeHeader";
import FeaturesHightlight from "./FeaturesHightlight/FeaturesHightlight";
import ClientsHightlight from "./ClientsHightlight/ClientsHightlight";
import StoreHighlight from "./StoreHighlight/StoreHighlight";

function Home() {
  return (
    <Box>
      <HomeHeader />
      <FeaturesHightlight />
      <StoreHighlight />
      <ClientsHightlight />
    </Box>
  );
}

export default Home;
