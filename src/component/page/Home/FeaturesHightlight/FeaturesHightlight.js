import React, { useState } from "react";
import VizSensor from "react-visibility-sensor";
import {
  Box,
  Container,
  Grid,
  Fade,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";

function FeaturesHightlight() {
  const [fadeIn, setFadeIn] = useState(false);

  const features = [
    {
      icon: Info,
      text: "Diam sea invidunt elitr ut voluptua nonumy diam takimata est et lorem..",
    },
    {
      icon: Info,
      text: "Diam sea invidunt elitr ut invidunt aliquyam ipsum dolore sadipscing sit. Kasd tempor voluptua nonumy diam takimata est et lorem..",
    },
    {
      icon: Info,
      text: "Diam sea invidunt elitr ut invidunt aliquyam sadipscing nonumy diam takimata est et lorem..",
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
        <Fade in={fadeIn} timeout={1000}>
          <Container>
            <Box textAlign="center" mb={5}>
              <Typography variant="h4">Why you should choose us?</Typography>
              <Typography variant="subtitle1">
                We providing the world with the best services.
              </Typography>
            </Box>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
              spacing={5}
            >
              {features.map((feature, index) => (
                <Fade
                  in={fadeIn}
                  timeout={1000}
                  style={{ transitionDelay: index * 250 }}
                  key={index}
                >
                  <Grid item md={4} component={Box} display="flex" width={1}>
                    <SvgIcon
                      component={feature.icon}
                      fontSize="large"
                      style={{ margin: "25px" }}
                    />
                    <Typography>{feature.text}</Typography>
                  </Grid>
                </Fade>
              ))}
            </Grid>
          </Container>
        </Fade>
      </Box>
    </VizSensor>
  );
}

export default FeaturesHightlight;
