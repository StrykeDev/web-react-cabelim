import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

function StoreHighlight() {
  return (
    <Box style={{ backgroundColor: "#eee" }}>
      <Container>
        <Box textAlign="center" py={50}>
          <Typography variant="h4">Store is under construction!</Typography>
          <Typography variant="subtitle1">Come back later.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default StoreHighlight;
