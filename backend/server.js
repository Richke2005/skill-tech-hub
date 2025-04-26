const app = require("./src/app.js");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening in http://localhost:${PORT}`);
  });