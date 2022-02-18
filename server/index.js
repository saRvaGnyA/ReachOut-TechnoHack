const express = require("express");
const connectToMongo = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());
connectToMongo();

app.use("/api/user", require("./routes/user"));
app.use("/api/company", require("./routes/company"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
