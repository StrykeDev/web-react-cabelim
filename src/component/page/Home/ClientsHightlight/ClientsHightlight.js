import React, { useState } from "react";
import VizSensor from "react-visibility-sensor";
import { Box, Container, Fade, Typography } from "@material-ui/core";

function ClientsHightlight() {
  const [fadeIn, setFadeIn] = useState(false);

  const clients = [
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
    {
      name: "Cabelim",
      logo: "./cabelim-logo.png",
    },
  ];

  return (
    <VizSensor
      onChange={(isVisable) => {
        if (!fadeIn) {
          setFadeIn(isVisable);
        }
      }}
    >
      <Box py={10}>
        <Container>
          <Box textAlign="center" mb={3}>
            <Typography variant="h4">Our happy clients</Typography>
            <Typography variant="subtitle1">
              Thank you for choosing us!
            </Typography>
          </Box>

          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {clients.map((client, index) => (
              <Fade
                in={fadeIn}
                timeout={500}
                style={{ transitionDelay: index * 250 }}
                key={index}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  height="100%"
                  width="128"
                  style={{ margin: "5px 15px" }}
                />
              </Fade>
            ))}
          </Box>
        </Container>
      </Box>
    </VizSensor>
  );
}

export default ClientsHightlight;
