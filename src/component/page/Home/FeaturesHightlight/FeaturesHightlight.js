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
      text: "Stet et ipsum sed kasd tempor, aliquyam lorem no lorem labore invidunt accusam nonumy, aliquyam est no erat elitr et dolore stet diam. Magna lorem.Diam sea invidunt elitr ut voluptua nonumy diam takimata est et lorem..",
    },
    {
      icon: Info,
      text: "Diam sea invidunt elitr ut invidunt aliquyam ipsum dolore sadipscing sit. Kasd tempor voluptua nonumy diam takimata est et lorem..Magna voluptua dolores voluptua lorem tempor et, diam clita gubergren kasd consetetur ipsum dolor at ipsum tempor. Dolore et sadipscing et dolores ipsum stet. Ipsum ut sed et kasd dolor sit lorem..",
    },
    {
      icon: Info,
      text: "Eirmod tempor nonumy tempor lorem magna diam ipsum sit et, et at justo magna at eos est. Takimata sed takimata dolor et rebum ut, no voluptua kasd amet.Diam sea invidunt elitr ut invidunt aliquyam sadipscing nonumy diam takimata est et lorem..",
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
                timeout={750}
                style={{ transitionDelay: index * 500 }}
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
      </Box>
    </VizSensor>
  );
}

export default FeaturesHightlight;
