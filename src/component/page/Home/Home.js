import logo from "./asset/cabelim-logo.png";
import { Container, Typography } from "@material-ui/core";

function Home() {
  return (
    <Container
      style={{
        textAlign: "center",
        backgroundColor: "red"
      }}
    >
      <img src={logo} alt="logo" width="512" />
      <Typography variant="subtitle1">Coming soon...</Typography>
    </Container>
  );
}

export default Home;
