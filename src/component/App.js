import Home from "./page/Home/Home";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Navbar />
      </Grid>

      <Grid item xs>
        <Home />
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
