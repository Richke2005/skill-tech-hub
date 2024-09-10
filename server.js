const app = require("./src/app.js");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening in http://localhost:${PORT}`);
  });