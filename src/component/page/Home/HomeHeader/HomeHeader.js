import React, { useEffect } from "react";
import { Box, Container, Fade, Typography } from "@material-ui/core";

import header from "./asset/header.png";

function HomeHeader() {
  const headerBackground = {
    backgroundImage: `url(${header})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const resizeHeader = () => {
    const header = document.getElementById("header");

    if (window.scrollY < 64) {
      header.style.height = "100vh";
      header.style.transition = "height .4s ease-in-out";
    } else {
      header.style.height = "200px";
      document.removeEventListener("scroll", resizeHeader);
    }
  };

  document.addEventListener("scroll", resizeHeader);
  useEffect(resizeHeader);

  return (
    <Box style={{ backgroundColor: "#eee" }}>
      <Container style={headerBackground}>
        <Box id="header" px={1} py={10} width="50%">
          <Fade in={true} timeout={500} style={{ transitionDelay: 500 }}>
            <Typography variant="h3">Powering people</Typography>
          </Fade>
          <Fade in={true} timeout={500} style={{ transitionDelay: 1500 }}>
            <Typography variant="h3">and industries.</Typography>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeHeader;
