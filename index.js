import { app } from "./server.js";
import { config } from "./config/config.js";

const port = config.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
