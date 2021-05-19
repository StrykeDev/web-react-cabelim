import logo from "./asset/cabelim-logo.png";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div style={{ display: "block", textAlign: "center", margin: "10% 0" }}>
      <img src={logo} alt="logo" width="512" />
      <Typography variant="subtitle1">Coming soon...</Typography>
    </div>
  );
}

export default App;
